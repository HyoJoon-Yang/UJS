import Layout from "../components/layout/Layout.js";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../styles/Account.css";
import { Container } from "react-bootstrap";
import AccountHeader from "../components/AccountHeader.js";

function Account() {
    return (
        <Layout>
            <Container style={{ minHeight: '100vh' }}>
                <AccountHeader />
                <Container fluid id="account-article">
                    <Row>
                        <Col sm={5} id="user-ranking">
                            <h3>User name님의 랭킹</h3>
                            <img src="img/Ranking.svg" alt="ranking svg" style={{ width: "250px" }} />
                            <h5>현재 실버3입니다!</h5>
                        </Col>
                        <Col sm={7}>
                            그래프 출력 공간
                            
                        </Col>
                    </Row>
                </Container>
            </Container>
        </Layout>
    );
}

export default Account;