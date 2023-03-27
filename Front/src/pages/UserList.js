import Layout from "../components/layout/Layout.js";
import { Container } from "react-bootstrap";
import AccountHeader from "../components/AccountHeader.js";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import Form from 'react-bootstrap/Form';
import UserListMoreBtn from "../components/UserListMoreBtn.js";
import "../styles/UserList.css";

function UserList() {
    return (
        <Layout>
            <Container style={{ minHeight: '100vh', position: "relative" }}>
                <AccountHeader />
                <Container id="user-list-heading">
                    <h3><b>내 진단목록</b></h3>
                    <Form.Select id="select-order" aria-label="Default select example">
                        <option value="1">최신순</option>
                        <option value="2">과거순</option>
                    </Form.Select>
                </Container>
                <Container className="user-list-box">
                    <h5>2023-01-25 18:23  ㅇㅇ골프장에서</h5>
                    <h6>정면 스윙 | 8.2 / 10 점</h6>
                    <UserListMoreBtn />
                    <hr />
                </Container>
                <Container className="user-list-box">
                    <h5>2023-01-03 17:30  제목 없음</h5>
                    <h6>측면 스윙 | 8.5 / 10 점</h6>
                    <UserListMoreBtn />
                    <hr />
                </Container>
                <Link to="/account" style={{ width: "100px", position: "absolute", bottom: "20px", right: "10px" }}>
                    <ChevronLeftIcon boxSize={20} style={{ float:"left" }} />
                    <h6><b>뒤로가기</b></h6>
                </Link>
            </Container>
        </Layout>
    );
}

export default UserList;