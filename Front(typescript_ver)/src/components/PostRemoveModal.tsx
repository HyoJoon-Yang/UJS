import axios from "axios";
import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link, useParams } from "react-router-dom";
import { deletePost } from "src/apipost";
// 로그아웃 버튼과 모달창 버튼의 css는 Navbar.css에 적어둠

export default function PostRemoveModal() {
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const { postPk } = useParams<{ postPk: string }>();
if (postPk === undefined) {
    return;
  }
  const handleDelete = async () => {
    try {
      const response = await deletePost(parseInt(postPk));
    } catch (error) {
    }
  };


  return (
    <div>
      <Button className="commu-detail-btn" onClick={handleShow}>
        삭제하기
      </Button>

      <Modal show={show} onHide={handleClose}>
        {/* <Modal.Header>
                    <Modal.Title></Modal.Title>
                </Modal.Header> */}
        <Modal.Body>정말 삭제하시겠습니까?</Modal.Body>
        <Modal.Footer>
          <Button className="btn_close logout_modal_btn" onClick={handleClose}>
            닫기
          </Button>
          <Link to="/"><Button 
              onClick={handleDelete} className="logout_modal_btn">게시글 삭제</Button></Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
