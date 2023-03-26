import Layout from "../components/layout/Layout.js";
import UserAccountModal from "../components/UserAccountModal.js";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../styles/Account.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Account() {
    return (
        <Layout>
            <Container style={{ minHeight: '100vh' }}>
                <Container fluid id="account-bg">
                    <div id="profile-img"></div>
                    
                    <span id="profile-desc">
                        <UserAccountModal />
                        <h3><b>User name</b></h3>
                        <p>게시글 0  |  <Link to="/user-list">진단목록</Link> 0</p>
                    </span>
                </Container>
                <Container fluid id="account-article">
                    <Row>
                        <Col sm={5} id="user-ranking">
                            <h3>User name님의 랭킹</h3>
                            <img src="img/Ranking.svg" alt="ranking svg" style={{ width: "250px" }} />
                            <h5>현재 실버3입니다!</h5>
                        </Col>
                        <Col sm={7}>그래프 표시 구역</Col>
                    </Row>
                </Container>
            </Container>
        </Layout>
    );
}

export default Account;