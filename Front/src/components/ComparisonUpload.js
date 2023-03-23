import React, { useState } from 'react';
import { Container } from "react-bootstrap";
import "../styles/ComparisionUpload.css";

function ComparisonUpload() {
    const [file, setFile] = useState({});

    const fileUpload = e => {
        const videoType = e.target.files[0].type.includes('video');

        setFile({
            url: URL.createObjectURL(e.target.files[0]),
            video: videoType,
        });
    }

    return (
        <Container id="file-upload-container">
            <div>
                <h4>영상을 업로드해주세요.</h4>
                <input type="file" onChange={fileUpload} />
                {file.video && <video src={file.url} controls width="100%" style={{ marginTop: "20px"}} />}
                {file.video && <button id="file-upload-btn">분석 시작</button>}
            </div>  
        </Container>

    );
}

export default ComparisonUpload;