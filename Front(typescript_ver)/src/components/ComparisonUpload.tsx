import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { IAnalysis, videoUpload } from "src/api";
import "../styles/ComparisonUpload.css";

interface FileState {
  url: string;
  video: boolean;
}

interface IForm {
  video: any;
}

export default function ComparisonUpload() {
  const { register, handleSubmit } = useForm<IForm>();
  const mutation = useMutation(videoUpload, {
    onSuccess: (data: IAnalysis) => {
      console.log(data);
    },
  });
  const onSubmit = (video: IForm) => {
    mutation.mutate(video.video[0]);
  };

  const [file, setFile] = useState<FileState>({ url: "", video: false });

  const fileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const videoType = e.target.files![0].type.includes("video");

    setFile({
      url: URL.createObjectURL(e.target.files![0]),
      video: videoType,
    });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Container id="file-upload-container">
        <div>
          <h3>영상을 업로드해주세요.</h3>
          <div className="file-upload-box">
            <label htmlFor="file">영상 업로드</label>
            <input
              {...register("video")}
              type="file"
              id="file"
              onChange={fileUpload}
              accept="video/mp4,video/mkv, video/x-m4v,video/*"
            />
          </div>
          {file.video && (
            <video
              src={file.url}
              controls
              width="100%"
              style={{ marginTop: "20px" }}
            />
          )}
          {file.video && (
            <button type="submit" id="file-upload-btn">
              분석 시작
            </button>
          )}
        </div>
      </Container>
    </Form>
  );
}