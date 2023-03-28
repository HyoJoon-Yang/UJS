import { Container } from "react-bootstrap";
import React from "react";
import { Layout } from "src/components/layout/Layout";

export default function UserRank() {
  return (
    <Layout>
      <Container style={{ minHeight: "90vh" }}>
        <h1>유저 랭킹 화면입니다.</h1>
      </Container>
    </Layout>
  );
}
