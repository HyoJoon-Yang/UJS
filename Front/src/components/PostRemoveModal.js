import React, { useState } from 'react';
// import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useParams } from 'react-router-dom'; 
import { Link } from "react-router-dom";
import axios from "axios";
// 로그아웃 버튼과 모달창 버튼의 css는 Navbar.css에 적어둠

function PostRemoveModal() {
    const {id : postId} = useParams();
    const [text, setText] = useState([]);
    

    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        
    
        <div>
            <Button
                className="commu-detail-btn" onClick={handleShow}>
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
                    <Link to="/commu"><Button 
              onClick={() => {
                axios.delete(`http://127.0.0.1:8000/api/v1/commu/posts/${postId}`);
                setText(text.filter((text) => text.id !== postId));
              }} className="logout_modal_btn">게시글 삭제</Button></Link>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default PostRemoveModal;