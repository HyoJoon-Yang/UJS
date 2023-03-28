import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import React from "react";
import { Layout } from "src/components/layout/Layout";
import Banner from "src/components/Banner";
import BoardList from "src/components/BoardList";

export default function Faq() {
  return (
    <Layout>
      <Container style={{ minHeight: "100vh" }}>
        <Banner title="건의사항" />
        <BoardList />
        <Link to="/post-form">
          <Button
            style={{
              backgroundColor: "#9DC08B",
              border: "none",
              borderRadius: "10px",
              float: "right",
              marginTop: "10px",
              marginRight: "10px",
            }}
          >
            <b>글 작성</b>
          </Button>
        </Link>
      </Container>
    </Layout>
  );
}
