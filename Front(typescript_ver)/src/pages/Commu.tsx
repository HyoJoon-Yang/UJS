import Button from "react-bootstrap/Button";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import BoardList from "../components/BoardList";
import { Layout } from "../components/layout/Layout";
import React from "react";
import ProtectedPage from "../components/ProtectedPage";
import Table from "react-bootstrap/Table";
  import { useQuery } from "@tanstack/react-query";
  import { getPosts } from "../apipost";
  import { PostList } from "../types";


export default function Commu() {
  const { data} = useQuery<PostList[]>(["posts"], getPosts);
  
  return (
    <ProtectedPage>
      <Layout>
        <Container style={{ minHeight: "100vh" }}>
          <Banner title="자유게시판" />
          <Table id="board-list-table" striped bordered hover size="sm">
                      <tbody> 
                      {data?.filter((e:any) => e.kind === "posts").map((e:any) => (
                        <BoardList kind={e.kind} pk={e.id} title={e.title} contents={""} owner={e.owner}  created_at={e.create_at} updated_at={e.update_at}/>
                        ))}
          </tbody>
    </Table>
          <Link to="/post-form">
            <Button
              style={{
                backgroundColor: "#9DC08B",
                border: "none",
                borderRadius: "10px",
                float: "right",
                marginTop: "10px",
                marginRight: "10px",
              }}
            >
              <b>글 작성</b>
            </Button>
          </Link>
        </Container>
      </Layout>
    </ProtectedPage>
  );
}
