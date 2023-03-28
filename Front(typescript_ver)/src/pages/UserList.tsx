import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import "../styles/UserList.css";
import React from "react";
import { Layout } from "src/components/layout/Layout";
import AccountHeader from "src/components/AccountHeader";

export default function UserList() {
  return (
    <Layout>
      <Container style={{ minHeight: "100vh", position: "relative" }}>
        <AccountHeader />
        <h3>
          <b>내 진단목록</b>
        </h3>
        <Container className="user-list-box">
          <h5>2023-01-03 17:30 제목 없음</h5>
          <h6>측면 스윙 | 8.5 / 10 점</h6>
          <h6>+ 자세히 보기</h6>
        </Container>
        <Link
          to="/account"
          style={{
            width: "100px",
            position: "absolute",
            bottom: "20px",
            right: "10px",
          }}
        >
          <ChevronLeftIcon boxSize={20} style={{ float: "left" }} />
          <h6>
            <b>뒤로가기</b>
          </h6>
        </Link>
      </Container>
    </Layout>
  );
}
