import React, { useState } from 'react';
import { Container } from "react-bootstrap";

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
        <Container style={{ width: "100%", marginTop: "50px" }}>
            <div style={{ width: "350px", margin: "0 auto" }}>
                <h4 style={{ textAlign: "center", fontWeight: "bold", marginBottom: "10px" }}>영상을 업로드해주세요.</h4>
                <input type="file" onChange={fileUpload} />
                {file.video && <video src={file.url} controls width="100%" style={{ marginTop: "20px"}} />}
                {file.video && 
                    <button 
                        style={{ border: "1px solid #40513B", color:"white", backgroundColor:"#609966", 
                                 borderRadius: "5px", padding: "2px 8px" }}>
                    분석 시작</button>}
            </div>  
        </Container>

    );
}

export default ComparisonUpload;