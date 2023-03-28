import { Layout } from "src/components/layout/Layout";
import Banner from "src/components/Banner";
import { Container } from "react-bootstrap";
import ComparisonUpload from "src/components/ComparisonUpload";
import ComparisonResult from "src/components/ComparisonResult";
import React from "react";


// import Loading from "../components/Loading.js";

export default function Comparison() {
  return (
    <Layout>
      <Container style={{ minHeight: "100vh" }}>
        <Banner title="스윙 분석" />
        <ComparisonUpload />
        {/* {loading ? <Loading /> : null} */}
        <ComparisonResult />
      </Container>
    </Layout>
  );
}


