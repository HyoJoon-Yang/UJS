import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import axios from "axios";
// 로그아웃 버튼과 모달창 버튼의 css는 Navbar.css에 적어둠
const handleSubmit = async (event) => {
    var s_board  = document.getElementById("select_value");
    var value = (s_board.options[s_board.selectedIndex].value);
    var board_type='';
    // eslint-disable-next-line default-case
    switch (value) {
        case "1":
          board_type="posts";
          break;
        case "2":
          board_type="notices";
          break;
        case "3":
          // eslint-disable-next-line no-unused-vars
          board_type="suggest";
          break;
    }
    event.preventDefault();
    
    if (board_type !== "") {
        const response = await axios.post("http://127.0.0.1:8000/api/v1/commu/posts/", {title: event.target.title.value,
                                                                                        content: event.target.content.value,
                                                                                        kind:board_type,

        })
                            .then(function (response) {
                                console.log(response);
                            })
                            .catch(function (error) {
                                console.log(error);
                            });              
        console.log(response.data);
       
        }
        else {
            alert("게시판 종류를 선택하세요!")
            
        }
    };

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
                    <Button style={{ backgroundColor: "#9DC08B", border: "none" }} onClick={handleSubmit} className="logout_modal_btn">확인</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default SubmitBtn;