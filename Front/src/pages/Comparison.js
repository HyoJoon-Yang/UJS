import Layout from "../components/layout/Layout.js";
import Banner from "../components/Banner.js";
import { Container } from "react-bootstrap";
import ComparisonUpload from "../components/ComparisonUpload.js";
// import Loading from "../components/Loading.js";

function Comparison() {
    return (
        <Layout>
            <Container style={{minHeight: '100vh'}}>
                <Banner title="스윙 분석" />
                <ComparisonUpload />
                {/* {loading ? <Loading /> : null} */}
            </Container>
        </Layout>
    );
}

export default Comparison;