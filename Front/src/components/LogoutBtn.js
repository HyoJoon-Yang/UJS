import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// 로그아웃 버튼과 모달창 버튼의 css는 Navbar.css에 적어둠

function LogoutBtn() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div>
            <Button id="logout_btn" className="btn" onClick={handleShow}>로그아웃</Button>

            <Modal show={show} onHide={handleClose}>
                {/* <Modal.Header>
                    <Modal.Title></Modal.Title>
                </Modal.Header> */}
                <Modal.Body>정말 로그아웃을 하시겠습니까?</Modal.Body>
                <Modal.Footer>
                    <Button className="btn_close logout_modal_btn" onClick={handleClose}>
                        닫기
                    </Button>
                    <Link to="/first"><Button className="logout_modal_btn">로그아웃</Button></Link>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default LogoutBtn;