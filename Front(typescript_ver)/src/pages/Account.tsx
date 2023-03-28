import { Layout } from 'src/components/layout/Layout';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../styles/Account.css";
import { Container } from "react-bootstrap";
import AccountHeader from 'src/components/AccountHeader';
import AccountUserChart from 'src/components/AccountUserChart';

export default function Account() {
    return (
        <Layout>
            <Container style={{ minHeight: '100vh' }}>
                <AccountHeader />
                <Container fluid id="account-article">
                    <Row>
                        <Col sm={5} id="user-ranking">
                            <h3>User name님의 랭킹</h3>
                            <img src="img/Ranking.svg" alt="ranking svg" />
                            <h5>현재 실버3입니다!</h5>
                        </Col>
                        <Col sm={7} id="user-chart">
                            <h3>User name님의 성장 그래프</h3>
                            <div style={{ width: "100%" }}>
                                <AccountUserChart />
                            </div>
                            
                        </Col>
                    </Row>
                </Container>
            </Container>
        </Layout>
    );
}