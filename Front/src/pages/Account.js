import Layout from "../components/layout/Layout.js";
import UserAccountModal from "../components/UserAccountModal.js";
import "../styles/Account.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Account() {
    return (
        <Layout>
            <Container style={{minHeight: '100vh'}}>
                <Container fluid id="account-bg">
                    <div id="profile-img"></div>
                    
                    <span id="profile-desc">
                        <UserAccountModal />
                        <h3><b>User name</b></h3>
                        <p>게시글 0  |  <Link to="/user-list">진단목록</Link> 0</p>
                    </span>
                </Container>
            </Container>
        </Layout>
    );
}

export default Account;