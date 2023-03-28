import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "../styles/ComparisonUpload.css";

interface FileState {
  url: string;
  video: boolean;
}

export default function ComparisonUpload() {
  const [file, setFile] = useState<FileState>({ url: "", video: false });

  const fileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const videoType = e.target.files![0].type.includes("video");

    setFile({
      url: URL.createObjectURL(e.target.files![0]),
      video: videoType,
    });
  };

  return (
    <Container id="file-upload-container">
      <div>
        <h3>영상을 업로드해주세요.</h3>
        <input type="file" onChange={fileUpload} />
        {file.video && (
          <video
            src={file.url}
            controls
            width="100%"
            style={{ marginTop: "20px" }}
          />
        )}
        {file.video && <button id="file-upload-btn">분석 시작</button>}
      </div>
    </Container>
  );
}