import Layout from "../components/layout/Layout.js";
import { Container } from "react-bootstrap";

function UserRank() {
    return (
        <Layout>
            <Container style={{minHeight: '90vh'}}>
                <h1>유저 랭킹 화면입니다.</h1>
            </Container>
        </Layout>
    );
}

export default UserRank;