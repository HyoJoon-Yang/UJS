import { Container } from "react-bootstrap";
import React, { useEffect, useState } from 'react';
import "../styles/ComparisonResult.css";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { EmailShareButton, EmailIcon, FacebookShareButton, FacebookIcon, LineShareButton, LineIcon } from "react-share";


export default function ComparisonResult() {

  const currentUrl = window.location.href;

  const popover = (
      <Popover id="popover-basic">
        <Popover.Body>
          자유게시판에 자랑하기
          <hr />
          <Container className="d-flex justify-content-between" style={{ width: "150px"}}>
              <EmailShareButton url={currentUrl}>
                  <EmailIcon size={30} round={true}></EmailIcon>
              </EmailShareButton>
              <FacebookShareButton url={currentUrl}>
                  <FacebookIcon size={30} round={true}></FacebookIcon>
              </FacebookShareButton>
              <LineShareButton url={currentUrl}>
                  <LineIcon size={30} round={true}></LineIcon>
              </LineShareButton>
          </Container>
        </Popover.Body>
      </Popover>
    );

    const [comparisons, setComparisons] = useState([]);

    useEffect(() => {
      fetch('/api/photos/')
        .then(response => response.json())
        .then(data => setComparisons(data));
    }, []);

  return (
    <Container fluid id="comparison-result-container">
      <h3>분석 결과</h3>
      <p>
        AI가 분석을 끝마쳤습니다. <br /> 결과를 확인해주세요!
      </p>
      <Container id="comparison-result-mov">
        <Tabs
        defaultActiveKey="1"
        id="uncontrolled-tab-example"
        className="mb-3"
        >
          {comparisons.map(comparison => (
            <Tab eventKey={comparison.id} title={comparison.title}>
              <img key={comparison.id} src={comparison.url} alt="comparison photo" />
              <h6>{comparison.text}</h6>
              <hr />
              <h6><b>{comparison.score}</b></h6>
            </Tab>
          ))}
        </Tabs>
      </Container>

      <Container id="comparison-result-text">
        <h5>총점 : {comparison.totalScore} 점</h5>
        <button className="result-btn">
          <img src="img/download.svg" alt="download btn" /> 결과 저장하기
        </button>
        <OverlayTrigger trigger="click" placement="left" overlay={popover}>
          <button className="result-btn" style={{ marginLeft: "10px"}}>
            <img src="img/share.svg" alt="share btn" /> 결과 공유하기
          </button>
        </OverlayTrigger>
      </Container>
    </Container>
  );
}
