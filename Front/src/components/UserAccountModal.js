import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function UserAccountModal() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div>
            <img 
                src="img/gear.png" alt="gear.png" 
                style={{ height: "25px", position: "absolute", top: 0, left: "150px", cursor: "pointer" }}
                onClick={handleShow}
            />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title><b>사용자 정보 수정</b></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3">
                        <Form.Label>이메일</Form.Label>
                        <Form.Control type="email" placeholder="이메일 주소" />
                        <Form.Text className="text-muted" style={{ fontSize: "13px" }}>
                            변경할 이메일 주소를 입력해주세요.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>비밀번호</Form.Label>
                        <Form.Control type="password" placeholder="비밀번호" />
                        <Form.Text className="text-muted" style={{ fontSize: "13px" }}>
                            변경할 비밀번호를 입력해주세요.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>성별</Form.Label>
                        <Form.Control type="text" placeholder="남자 / 여자" />
                        <Form.Text className="text-muted" style={{ fontSize: "13px" }}>
                            성별을 입력해주세요.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>신장(cm)</Form.Label>
                        <Form.Control type="text" placeholder="신장(cm)" />
                        <Form.Text className="text-muted" style={{ fontSize: "13px" }}>
                            신장을 입력해주세요.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>체중(kg)</Form.Label>
                        <Form.Control type="text" placeholder="체중(kg)" />
                        <Form.Text className="text-muted" style={{ fontSize: "13px" }}>
                            체중을 입력해주세요.
                        </Form.Text>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button style={{ border: "none"}} className="btn_close" onClick={handleClose}>
                        닫기
                    </Button> 
                    <Button style={{ border: "none", backgroundColor: "#609966"}} className="btn_close" onClick={handleClose}>
                        수정하기
                    </Button> 
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default UserAccountModal;