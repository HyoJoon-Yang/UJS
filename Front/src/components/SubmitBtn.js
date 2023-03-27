import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// 로그아웃 버튼과 모달창 버튼의 css는 Navbar.css에 적어둠

function SubmitBtn() {

    const [show, setShow] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div>
            <Button id="logout_btn" className="btn" onClick={handleShow}>작성</Button>

            <Modal show={show} onHide={handleClose}>
                {/* <Modal.Header>
                    <Modal.Title></Modal.Title>
                </Modal.Header> */}
                <Modal.Body>작성을 완료할까요?</Modal.Body>
                <Modal.Footer>
                    <Button className="btn_close logout_modal_btn" onClick={handleClose}>
                        닫기
                    </Button>
                    <Button style={{ backgroundColor: "#9DC08B", border: "none" }} type="submit" className="logout_modal_btn">확인</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default SubmitBtn;