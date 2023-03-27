import Layout from "../components/layout/Layout.js";
import Button from 'react-bootstrap/Button';
import Banner from "../components/Banner.js";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import {useGetData} from "./UseGetData.js";

import "../styles/BoardList.css";
function Notice() {
    const text = useGetData("http://127.0.0.1:8000/api/v1/commu/posts/")
    return (
        <Layout>
            <Container style={{minHeight: '100vh'}}>
                <Banner title="공지사항" />
                <Table id="board-list-table" striped bordered hover size="sm">
                    <tbody>
                            <>
                        {text.filter((e) => {
                                    return e.kind === "notices"; // notice
                                    }).map((e) => (
                            
                                <tr>
                                    
                                            <td onClick="http://localhost:3000/commu" className="first-td">{e.id}</td>
                                            <td><Link to={`/commu-detail/${e.id}`}>{e.title}</Link></td>  
                                            <td className="last-td">{e.create_at}</td>
                            

                                        
                                </tr>
                        ))}
                        </>
               
            </tbody>
            </Table>
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