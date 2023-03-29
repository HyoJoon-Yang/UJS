import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import "../styles/UserList.css";
import React from "react";
import { Layout } from "src/components/layout/Layout";
import AccountHeader from "src/components/AccountHeader";
import Form from "react-bootstrap/Form";
import "../styles/UserList.css";
import UserListMoreBtn from "src/components/UserListMoreBtn";
import ProtectedPage from "src/components/ProtectedPage";

export default function UserList() {
  return (
    <ProtectedPage>
      <Layout>
        <Container style={{ minHeight: "100vh", position: "relative" }}>
          <AccountHeader />
          <Container id="user-list-heading">
            <h3>
              <b>내 진단목록</b>
            </h3>
            <Form.Select id="select-order" aria-label="Default select example">
              <option value="1">최신순</option>
              <option value="2">과거순</option>
            </Form.Select>
          </Container>
          <Container className="user-list-box">
            <h5>2023-01-25 18:23 ㅇㅇ골프장에서</h5>
            <h6>정면 스윙 | 8.2 / 10 점</h6>
            <UserListMoreBtn />
            <hr />
          </Container>
          <Container className="user-list-box">
            <h5>2023-01-03 17:30 제목 없음</h5>
            <h6>측면 스윙 | 8.5 / 10 점</h6>
            <UserListMoreBtn />
            <hr />
          </Container>
          <br />
          <Link to="/account" id="user-list-back-btn">
            <ChevronLeftIcon boxSize={20} style={{ float: "left" }} />
            <h6>
              <b>뒤로가기</b>
            </h6>
          </Link>
        </Container>
      </Layout>
    </ProtectedPage>
  );
}
