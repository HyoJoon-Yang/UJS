import React, { useState } from 'react';
// import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// 로그아웃 버튼과 모달창 버튼의 css는 Navbar.css에 적어둠

function TestBtn() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div>
            <Modal show={show} onHide={handleShow}>
                {/* <Modal.Header>
                    <Modal.Title></Modal.Title>
                </Modal.Header> */}
                <Modal.Body>게시판 이름을 확인해주세요</Modal.Body>
                <Modal.Footer>
                    <Button className="btn_close_modal_btn" onClick={handleClose}>
                        닫기
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default TestBtn;