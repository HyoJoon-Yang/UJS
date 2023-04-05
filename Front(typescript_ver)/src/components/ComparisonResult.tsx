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

  // const [ isOn, setIsOn ] = useState(true);
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
          <Tab eventKey="1" title="adress">
            <img src="img/adress.png" alt="adress picture" style={{ width: "100%" }} />
            <h6>
              헤드 위치: PASS ✅ <br/>
              팔 간격: PASS ✅ <br/>
              골반 위치: PASS ✅ <br/>
              스탠스: PASS ✅ <br/>
              <hr/>
              <b>100점</b>
            </h6>
          </Tab>
          <Tab eventKey="2" title="backswing">
            <img src="img/backswing.png" alt="backswing picture" style={{ width: "100%" }} />
            <h6>
              헤드 위치: 왼쪽으로 중심이 기울어졌습니다. ❌ <br/>
              팔 간격: 팔을 좀 더 펴주세요. ❌ <br/>
              골반 각도: PASS ✅ <br/>
              <hr/>
              <b>33점</b>
            </h6>
          </Tab>
          <Tab eventKey="3" title="backswingtop">
            <img src="img/backswingtop.png"alt="backswingtop picture" style={{ width: "100%" }} />
            <h6>
              헤드 위치: 왼쪽으로 중심이 기울어졌습니다. ❌ <br/>
              팔 간격: 왼쪽으로 쏠렸습니다. ❌ <br/>
              골반 각도: PASS ✅ <br/>
              <hr/>
              <b>33점</b>
            </h6>
          </Tab>
          <Tab eventKey="4" title="impact">
            <img src="img/impact.png" alt="impact picture" style={{ width: "100%" }} />
            <h6>
              헤드 위치: PASS ✅ <br/>
              골반 위치: PASS ✅ <br/>
              왼쪽 어깨 위치: PASS ✅ <br/>
              손 위치: PASS ✅ <br/>
              <hr/>
              <b>100점</b>
            </h6>
          </Tab>
          <Tab eventKey="5" title="follow">
            <img src="img/follow.png" alt="follow picture" style={{ width: "100%" }} />
            <h6>
              헤드 위치: PASS ✅ <br/>
              골반 다리: PASS ✅ <br/>
              오른쪽 다리: PASS ✅ <br/>
              <hr/>
              <b>100점</b>
            </h6>
          </Tab>
          <Tab eventKey="6" title="finish">
            <img src="img/finish.png" alt="finish picture" style={{ width: "100%" }} />
            <h6>
              헤드 위치: PASS ✅ <br/>
              어깨 위치: 중심이 덜 이동하였습니다. ❌ <br/>
              골반 위치: PASS ✅ <br/>
              <hr/>
              <b>100점</b>
            </h6>
          </Tab>
        </Tabs>
      </Container>

      <Container id="comparison-result-text">
        <h5>총점 : 77.7 점</h5>
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
