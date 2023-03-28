import { Container } from "react-bootstrap";
import { useState } from "react";
import "../styles/ComparisonResult.css";
import React from "react";

export default function ComparisonResult() {
  const [isOn, setIsOn] = useState(true);
  return (
    <Container fluid id="comparison-result-container">
      <h3>분석 결과</h3>
      <p>
        AI가 분석을 끝마쳤습니다. <br /> 결과를 확인해주세요!
      </p>
      <h6>자세 일치율: ??.?%</h6>
      <Container id="comparison-result-mov">
        이 부분에 분석 영상이 출력됩니다.
      </Container>
      <Container id="comparison-result-text">
        <button id="result-onoff-btn" onClick={() => setIsOn(!isOn)}>
          {isOn ? "분석 결과 숨기기" : "분석 결과 보이기"}
        </button>
        {isOn && <span>이 부분에 분석 결과 텍스트가 출력됩니다.</span>}
        <br />
        <button className="result-btn">
          <img src="img/download.svg" alt="download btn" /> 결과 저장하기
        </button>
        <button className="result-btn" style={{ marginLeft: "10px" }}>
          <img src="img/share.svg" alt="share btn" /> 결과 공유하기
        </button>
      </Container>
    </Container>
  );
}
