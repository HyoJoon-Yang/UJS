import Layout from "../components/layout/Layout.js";
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import PostRemoveModal from "../components/PostRemoveModal.js";
import { useNavigate,useParams } from 'react-router-dom'; 
import "../styles/CommuDetail.css";
import {useGetOneData} from "./UseGetData.js"

function CommuDetail(props) {
    let navigate = useNavigate();
    const {id : postId} = useParams();
    const text = useGetOneData(`http://127.0.0.1:8000/api/v1/commu/posts/${postId}/`)
    
    return (
        <Layout>
            <Container style={{ paddingTop: "20px" }}>
                <Container fluid>


                
                    <h3>{text.title}</h3>  
                    {text.content}
                    <h6>작성자 아이디 | {text.create_at}</h6>
                    <hr />
                    <Container style={{ height: "550px", fontWeight: "500", fontSize: "20px" }}>
                        {text.content}
                    </Container>
                    <hr />
                    <Container id="commu-detail-btn-group">
                        <button className="commu-detail-btn" onClick={() => { navigate(-1)}}>목록으로</button> 
                        <button className="commu-detail-btn">수정하기</button> 
                        <PostRemoveModal />
                    </Container>
                </Container>
                
                <Container className="comment-input-form">
                    <InputGroup className="mb-3">
                        <Form.Control maxLength={400} placeholder="댓글을 입력하세요. (400자 제한)" />
                        <Button variant="outline-secondary" id="button-addon2">
                            작성
                        </Button>
                    </InputGroup>
                    <Container className="comment-form">
                        <Row>
                            <Col xs={2}>
                            <div className="comment-user-profile">
                                <div className="comment-user-img"></div>
                                <p>작성자 아이디</p>
                                <p>작성시간</p>
                            </div>
                            </Col>
                            <Col xs={10}>
                                <div className="comment-output">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                            </Col>
                        </Row>
                        <hr />
                    </Container>
                </Container>

            </Container>
        </Layout>
    );
}

export default CommuDetail;