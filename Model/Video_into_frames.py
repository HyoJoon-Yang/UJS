import os 
import cv2 

filepath = './swing.mov' 

video = cv2.VideoCapture(filepath)

# video 가 잘 열렸는지 확인 안되면 종료 
if not video.isOpened() : 
   print("영상이 열리지 않음:", filepath)
   exit() 

   # 프레임 저장할 디렉토리 생성  
try : 
  if not os.path.exists(filepath[:-4]): 
    os.makedirs(filepath[:-4])
except OSError : 
  print("Error : 디렉토리오류 "+ filepath[:-4])

  # 1초마다 추출 해서 golf_drivershot file 에 저장 
count = 0 

while (video.isOpened()): 
  ret , image = video.read() 
  if( int(video.get(1)) % 1 ==0 ): 
    cv2.imwrite(filepath[:-4] + "/frame%d.jpg" % count , image)
    print("Saved frame number : ", str(int(video.get(1))))
    count += 1 
  if video.get(cv2.CAP_PROP_POS_FRAMES) == video.get(cv2.CAP_PROP_FRAME_COUNT):
    break

  
video.release()
