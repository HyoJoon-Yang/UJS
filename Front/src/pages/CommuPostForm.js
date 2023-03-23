import Layout from "../components/layout/Layout.js";
import { Container } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function CommuPostForm() {
    return (
        <Layout>
            <Container style={{minHeight: '100vh'}}>
                <InputGroup className="mb-3" size="md" style={{ marginTop: "30px" }}>
                    <DropdownButton
                    variant="outline-secondary"
                    title="게시판"
                    id="input-group-dropdown-1"
                    >
                        <Dropdown.Item href="#">자유게시판</Dropdown.Item>
                        <Dropdown.Item href="#">공지사항</Dropdown.Item>
                        <Dropdown.Item href="#">건의사항</Dropdown.Item>
                    </DropdownButton>
                    <Form.Control placeholder="게시판 선택 후 제목 입력" />
                </InputGroup>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>글 내용</Form.Label>
                    <Form.Control as="textarea" placeholder="내용을 작성해주세요." rows={18} />
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>파일 업로드</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>
                <Button style={{ backgroundColor: "#9DC08B", border: "none" }} type="submit">
                    작성하기
                </Button>
            </Container>
        </Layout>
    );
}

export default CommuPostForm;