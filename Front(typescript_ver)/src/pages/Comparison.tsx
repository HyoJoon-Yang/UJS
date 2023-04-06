import { Layout } from "src/components/layout/Layout";
import Banner from "src/components/Banner";
import { Container } from "react-bootstrap";
import ComparisonUpload from "src/components/ComparisonUpload";
import React from "react";
import ProtectedPage from "src/components/ProtectedPage";

export default function Comparison() {
  return (
    <ProtectedPage>
      <Layout>
        <Container style={{ minHeight: "100vh" }}>
          <Banner title="스윙 분석" />
          <ComparisonUpload />
        </Container>
      </Layout>
    </ProtectedPage>
  );
}
