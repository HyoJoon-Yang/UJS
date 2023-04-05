import { Container } from "react-bootstrap";
import { useState } from "react";
import "../styles/ComparisonResult.css";
import React from "react";
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

  const [ isOn, setIsOn ] = useState(true);
  return (
    <Container fluid id="comparison-result-container">
      <h3>분석 결과</h3>
      <p>
        AI가 분석을 끝마쳤습니다. <br /> 결과를 확인해주세요!
      </p>
      <h6>자세 일치율: ??.?%</h6>

      <Container id="comparison-result-mov">
        <Tabs
        defaultActiveKey="1"
        id="uncontrolled-tab-example"
        className="mb-3"
        >
          <Tab eventKey="1" title="1">
            <img src="img/adress.jpg" alt="adress picture" style={{ width: "100%" }} />
          </Tab>
          <Tab eventKey="2" title="2">
            <img src="img/backswingtop.jpg" alt="backswingtop picture" style={{ width: "100%" }} />
          </Tab>
          <Tab eventKey="3" title="3">
            <img src="img/backswing.jpg" alt="backswing picture" style={{ width: "100%" }} />
          </Tab>
          <Tab eventKey="4" title="4">
            <img src="img/impact.jpg" alt="impact picture" style={{ width: "100%" }} />
          </Tab>
          <Tab eventKey="5" title="5">
            <img src="img/follow.jpg" alt="follow picture" style={{ width: "100%" }} />
          </Tab>
          <Tab eventKey="6" title="6">
            <img src="img/finish.jpg" alt="finish picture" style={{ width: "100%" }} />
          </Tab>
        </Tabs>
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
        <OverlayTrigger trigger="click" placement="left" overlay={popover}>
          <button className="result-btn" style={{ marginLeft: "10px"}}>
            <img src="img/share.svg" alt="share btn" /> 결과 공유하기
          </button>
        </OverlayTrigger>
      </Container>
    </Container>
  );
}
