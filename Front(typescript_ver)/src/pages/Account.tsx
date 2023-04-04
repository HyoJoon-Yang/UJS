import { Layout } from "src/components/layout/Layout";
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/Account.css";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import AccountHeader from "src/components/AccountHeader";
import AccountUserChart from "src/components/AccountUserChart";
import ProtectedPage from "src/components/ProtectedPage";
import useUser from "src/lib/useUser";

export default function Account() {
  const { user } = useUser();
  return (
    <ProtectedPage>
      <Layout>
        <Container style={{ minHeight: "100vh" }}>
          <AccountHeader />
          <Container fluid id="account-article">
            <Row>
              <Col sm={5} id="user-ranking">
                <h3>{user?.nickname}님의 랭킹</h3>
                <Link to="/user-rank">
                  <img src="img/Ranking.svg" alt="ranking svg" />
                  <h5>
                    현재 <b>실버3</b>입니다!
                  </h5>
                </Link>
              </Col>
              <Col sm={7} id="user-chart">
                <h3>{user?.nickname}님의 성장 그래프</h3>
                <div style={{ width: "100%" }}>
                  <AccountUserChart />
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
      </Layout>
    </ProtectedPage>
  );
}
