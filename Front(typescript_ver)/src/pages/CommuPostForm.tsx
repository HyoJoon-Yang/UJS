import { Layout } from "../components/layout/Layout";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import React from "react";

export default function CommuPostForm() {
  return (
    <Layout>
      <Container style={{ minHeight: "100vh" }}>
        <InputGroup className="mb-3" size="sm" style={{ marginTop: "30px", height: "50px" }}>
          <Form.Select aria-label="Default select example">
            <option>게시판 선택</option>
            <option value="1">자유게시판</option>
            <option value="2">공지사항</option>
            <option value="3">건의사항</option>
          </Form.Select>
          <Form.Control
            style={{ width: "70%" }}
            placeholder="게시판 선택 후 제목 입력"
          />
        </InputGroup>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>글 내용</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="내용을 작성해주세요."
            rows={18}
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>파일 업로드</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
        <Button
          style={{ backgroundColor: "#9DC08B", border: "none" }}
          type="submit"
        >
          작성하기
        </Button>
      </Container>
    </Layout>
  );
}
