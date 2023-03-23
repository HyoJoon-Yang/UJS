import os
import json
import shutil

# JSON 파일과 이미지 파일이 포함된 폴더들의 경로를 정의합니다.
json_folder_path = "json 폴더 경로"
image_folder_path = "이미지 폴더 경로"

#takeback 예시
# takeback 폴더의 경로를 정의하고, 해당 폴더가 없으면 생성합니다.
takeback_folder_path = "./takeback/"
if not os.path.exists(takeback_folder_path):
    os.makedirs(takeback_folder_path)

# takeback JSON 파일들을 찾고, 파일명에서 확장자를 제외한 이름을 가져옵니다.
takeback_files = []
for filename in os.listdir(json_folder_path):
    if filename.endswith(".json"):
        json_file_path = os.path.join(json_folder_path, filename)
        with open(json_file_path, "r") as f:
            json_data = json.load(f)
            if json_data["image"]["action"] == "takeback":
                takeback_files.append(os.path.splitext(filename)[0])

# 파일명이 일치하는 이미지 파일들을 찾아 takeback 폴더로 이동시킵니다.
for filename in os.listdir(image_folder_path):
    if filename.startswith("."):
        continue
    image_file_path = os.path.join(image_folder_path, filename)
    filename_without_extension = os.path.splitext(filename)[0]
    if filename_without_extension in takeback_files:
        new_image_file_path = os.path.join(takeback_folder_path, filename)
        shutil.move(image_file_path, new_image_file_path)
