/* eslint-disable no-restricted-globals */
import Layout from "../components/layout/Layout.js";
import { Container } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import SubmitBtn from "../components/SubmitBtn.js";    
import {useGetOneData} from "./UseGetData.js"
import { useParams } from 'react-router-dom'; 

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
                            var link = 'http://localhost:3000/commu';
                            location.replace(link);                 
        console.log(response.data);
       
        }
        else {
            alert("게시판 종류를 선택하세요!")
            
        }
    };


function CommuUpdateForm() {
    const {id : postId} = useParams();
    const text = useGetOneData(`http://127.0.0.1:8000/api/v1/commu/posts/${postId}/`)
    
    return (
        <Layout>
            <form onSubmit={handleSubmit} >
            <Container onSubmit={handleSubmit} style={{minHeight: '100vh'}}>
                <InputGroup className="mb-3" size="md" style={{ marginTop: "30px" }}>
                    <Form.Select aria-label="Default select example" id="select_value" name="select_value">
                        <option>게시판 선택</option>
                        <option value="1">자유게시판</option>
                        <option value="2">공지사항</option>
                        <option value="3">건의사항</option>
                    </Form.Select>
                    
                    <Form.Control style={{ width: "70%" }} placeholder="게시판 선택 후 제목 입력" value={text.title} name="title"/>
                </InputGroup>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label >글 내용</Form.Label>
                    
                    <Form.Control name='content'  as="textarea" placeholder="내용을 작성해주세요." value={text.content} rows={18} />
                </Form.Group>
                
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>파일 업로드</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>
                <div>
                <Button style={{ backgroundColor: "#9DC08B", border: "none" }} type="submit">
                    작성하기
                    
                </Button>
                </div>
                 <SubmitBtn />


                
            </Container>
            </form>
        </Layout>
    );
}
export default CommuUpdateForm;