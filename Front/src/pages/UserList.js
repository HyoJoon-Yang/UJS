import Layout from "../components/layout/Layout.js";
import { Container } from "react-bootstrap";

function UserList() {
    return (
        <Layout>
            <Container style={{minHeight: '90vh'}}>
                <h1>진단 목록 리스트 화면입니다.</h1>
            </Container>
        </Layout>
    );
}

export default UserList;