import mediapipe as mp
import math
from django.conf import settings
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserAnalysisSerializer

from .models import Analysis
import os
import cv2
import mediapipe as mp


class UserAnalysis(APIView):

    def get(self, request):
        analysis = Analysis.objects.all()
        serializer = UserAnalysisSerializer(analysis, many=True)
        return Response(serializer.data)

    def post(self, request):
        

        serializer = UserAnalysisSerializer(data=request.data)
        if serializer.is_valid():
            video = serializer.save(
                user=request.user
            )
            filepath = video.video
            resize_and_show=video.video
            mp_drawing = mp.solutions.drawing_utils
            mp_drawing_styles = mp.solutions.drawing_styles
            mp_pose = mp.solutions.pose
        
            video_path = f"media/{video.video}"
            cap = cv2.VideoCapture(video_path)
            images = video_path
            fourcc = cv2.VideoWriter_fourcc('m', 'p', '4', 'v')
            out = cv2.VideoWriter('%s_output.mp4' % (video_path.split('.')[0]), fourcc, cap.get(
                cv2.CAP_PROP_FPS), (int(cap.get(cv2.CAP_PROP_FRAME_WIDTH)), int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))))
            
            # 프레임을 저장할 디렉토리를 생성
            try:
                if not os.path.exists(filepath[:-4]):
                    os.makedirs(filepath[:-4])
            except OSError:
                print('Error: Creating directory. ' + filepath[:-4])

            count = 0
            
            while(video.isOpened()):
                ret, image = video.read()
                if(int(video.get(1)) % fps == 0):  # 앞서 불러온 fps 값을 사용하여 1초마다 추출
                    cv2.imwrite(filepath[:-4] + "/frame%d.jpg" % count, image)
                    print('Saved frame number :', str(int(video.get(1))))
                    count += 1

            pose = mp_pose.Pose(
                min_detection_confidence=0.5,
                min_tracking_confidence=0.5,
                model_complexity=2)
            
            is_first = True  # 어드레스 시 첫 프레임을 받아오기 위한 플래그
            # 어드레스 시 첫 프레임의 좌표를 저장할 변수
            first_center_x, first_center_y, first_radius = None, None, None
            
            while cap.isOpened():
                ret, img = cap.read()
                if not ret:
                    break
            
                img_h, img_w, _ = img.shape
            
                img_result = img.copy()
            
                img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
                results = pose.process(img)
            
                mp_drawing.draw_landmarks(
                    img_result,
                    results.pose_landmarks,
                    mp_pose.POSE_CONNECTIONS,
                    landmark_drawing_spec=mp_drawing_styles.get_default_pose_landmarks_style())
            
                if results.pose_landmarks:
                    # https://google.github.io/mediapipe/solutions/pose.html#pose-landmark-model-blazepose-ghum-3d
                    landmark = results.pose_landmarks.landmark
            
                    left_ear_x = landmark[mp_pose.PoseLandmark.LEFT_EAR].x * img_w
                    left_ear_y = landmark[mp_pose.PoseLandmark.LEFT_EAR].y * img_h
            
                    right_ear_x = landmark[mp_pose.PoseLandmark.RIGHT_EAR].x * img_w
                    right_ear_y = landmark[mp_pose.PoseLandmark.RIGHT_EAR].y * img_h
            
                    center_x = int((left_ear_x + right_ear_x) / 2)
                    center_y = int((left_ear_y + right_ear_y) / 2)
        
                    radius = int((left_ear_x - right_ear_x) / 2)
                    radius = max(radius, 20)
            
                    if is_first:  # 어드레스 시 첫 프레임의 머리 좌표 저장
                        first_center_x = center_x
                        first_center_y = center_y
                        first_radius = int(radius * 2)
            
                        is_first = False
                    else:
                        cv2.circle(img_result, center=(first_center_x, first_center_y),
                            radius=first_radius, color=(0, 255, 255), thickness=2)
            
                        color = (0, 255, 0) # 초록색
            
                        # 머리가 원래 위치보다 많이 벗어난 경우
                        if center_x - radius < first_center_x - first_radius or center_x + radius > first_center_x + first_radius:
                            color = (0, 0, 255) # 빨간색
            
                        cv2.circle(img_result, center=(center_x, center_y),
                            radius=radius, color=color, thickness=2)
                    with mp_pose.Pose(
                        static_image_mode=True, min_detection_confidence=0.5, model_complexity=2) as pose:
                        for name, image in images.items():
                            # Convert the BGR image to RGB and process it with MediaPipe Pose.
                            results = pose.process(cv2.cvtColor(image, cv2.COLOR_BGR2RGB))
            
                            # Print nose landmark.
                            image_hight, image_width, _ = image.shape
                            if not results.pose_landmarks:
                                continue
                            print(
                            f'Nose coordinates: ('
                            f'{results.pose_landmarks.landmark[mp_pose.PoseLandmark.NOSE].x * image_width}, '
                            f'{results.pose_landmarks.landmark[mp_pose.PoseLandmark.NOSE].y * image_hight})'
                            )
                            print(
                            f'L_elbow coordinates: ('
                            f'{results.pose_landmarks.landmark[mp_pose.PoseLandmark.LEFT_ELBOW].x * image_width}, '
                            f'{results.pose_landmarks.landmark[mp_pose.PoseLandmark.LEFT_ELBOW].y * image_hight})'
                            )
                            print(
                            f'R_elbow coordinates: ('
                            f'{results.pose_landmarks.landmark[mp_pose.PoseLandmark.RIGHT_ELBOW].x * image_width}, '
                            f'{results.pose_landmarks.landmark[mp_pose.PoseLandmark.RIGHT_ELBOW].y * image_hight})'
                            )
                            print(
                            f'L_hip coordinates: ('
                            f'{results.pose_landmarks.landmark[mp_pose.PoseLandmark.LEFT_HIP].x * image_width}, '
                            f'{results.pose_landmarks.landmark[mp_pose.PoseLandmark.LEFT_HIP].y * image_hight})'
                            )
                            print(
                            f'R_hip coordinates: ('
                            f'{results.pose_landmarks.landmark[mp_pose.PoseLandmark.RIGHT_HIP].x * image_width}, '
                            f'{results.pose_landmarks.landmark[mp_pose.PoseLandmark.RIGHT_HIP].y * image_hight})'
                            )
                            print(
                            f'L_foot_index coordinates: ('
                            f'{results.pose_landmarks.landmark[mp_pose.PoseLandmark.LEFT_FOOT_INDEX].x * image_width}, '
                            f'{results.pose_landmarks.landmark[mp_pose.PoseLandmark.LEFT_FOOT_INDEX].y * image_hight})'
                            )
                            print(
                            f'R_foot_index coordinates: ('
                            f'{results.pose_landmarks.landmark[mp_pose.PoseLandmark.RIGHT_FOOT_INDEX].x * image_width}, '
                            f'{results.pose_landmarks.landmark[mp_pose.PoseLandmark.RIGHT_FOOT_INDEX].y * image_hight})'
                            )
            
                            # Draw pose landmarks.
                            print(f'Pose landmarks of {name}:')
                            annotated_image = image.copy()
                            mp_drawing.draw_landmarks(
                                annotated_image,
                                results.pose_landmarks,
                                mp_pose.POSE_CONNECTIONS,
                                landmark_drawing_spec=mp_drawing_styles.get_default_pose_landmarks_style())
                            resize_and_show(annotated_image)
            
                    def get_num():
                        x1 = results.pose_landmarks.landmark[mp_pose.PoseLandmark.RIGHT_HIP].x * image_width
                        y1 = results.pose_landmarks.landmark[mp_pose.PoseLandmark.RIGHT_HIP].y * image_hight
                        x2 = results.pose_landmarks.landmark[mp_pose.PoseLandmark.LEFT_FOOT_INDEX].x * image_width
                        y2 = results.pose_landmarks.landmark[mp_pose.PoseLandmark.LEFT_FOOT_INDEX].y * image_hight
                        return [x1, y1, x2, y2]
            
                    def cal_rad(arr):
                        rad = math.atan2(arr[3]-arr[1],arr[2]-arr[0])
                        return rad
            
                    def radTodeg(rad):
                        PI = math.pi
                        deg = (rad*180)/PI
                        print("{0:0.2f}".format(deg))
            
                    arr = get_num()
                    rad = cal_rad(arr)
                    radTodeg(rad)
            
                cv2.imshow('AI Golf Coach', img_result)
                out.write(img_result)
            
                if cv2.waitKey(1) == ord('q'):
                    break
            
            pose.close()
            cap.release()
            out.release()
            
            return Response(UserAnalysisSerializer(video).data)
        else:
            return Response(serializer.errors)
