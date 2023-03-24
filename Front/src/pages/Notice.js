import Layout from "../components/layout/Layout.js";
import Button from 'react-bootstrap/Button';
import Banner from "../components/Banner.js";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import BoardList from "../components/BoardList.js";

function Notice() {
    return (
        <Layout>
            <Container style={{minHeight: '100vh'}}>
                <Banner title="공지사항" />
                <BoardList />
                <Link to="/post-form">
                    <Button
                        style={{ backgroundColor: "#9DC08B", border: "none", borderRadius: "10px",
                                float: "right", marginTop: "10px", marginRight: "10px" }}
                    >
                        <b>글 작성</b>
                    </Button>
                </Link>
            </Container>
        </Layout>
    );
}

export default Notice;