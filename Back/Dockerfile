FROM python:3.11.0
ENV PYTHONUNBUFFERED 1
WORKDIR /UJS/Back
RUN pip install --upgrade pip

# 추가: /C:/ci_311/certifi_1676421629969/work/certifi 경로의 certifi 패키지를 설치
RUN pip install certifi==2021.5.30

COPY requirements.txt ./
RUN pip install -r requirements.txt
COPY . ./
EXPOSE 8000
