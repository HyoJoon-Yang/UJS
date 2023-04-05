import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { IAnalysis, videoUpload } from "src/api";
import ComparisonResult from "src/components/ComparisonResult";
import Loading from "src/components/Loading";
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

  const [start, setStart] = useState(false);
  const [loading, setLoading] = useState(false);

  function startHandler() {
    setStart(true);
    setLoading(true);
    setTimeout(function(){ setLoading(false);}, 5000);
  }

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
              accept="video/mp4, video/mkv, video/mov, video/x-m4v, video/*"
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
            <div>
              <button type="submit" id="file-upload-btn" onClick={startHandler}>
                분석 시작
              </button>
              {loading && <Loading />}
              {start && <ComparisonResult />}
            </div>
          )}
        </div>
      </Container>
    </Form>
  );
}
