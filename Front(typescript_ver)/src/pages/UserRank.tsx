import { Container } from "react-bootstrap";
import React from "react";
import { Layout } from "src/components/layout/Layout";
import { motion } from "framer-motion";
import Table from "react-bootstrap/Table";
import "src/styles/UserRank.css";
import ProtectedPage from "src/components/ProtectedPage";

export default function UserRank() {
  return (
    <ProtectedPage>
      <Layout>
        <Container id="user-rank-box" style={{ minHeight: "100vh" }}>
          <h2>UJS 랭킹</h2>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <Table responsive="md" id="user-rank-table">
              <thead className="user-rank-table-head">
                <tr>
                  <th>순위</th>
                  <th>유저 이름</th>
                  <th>점수</th>
                  <th>등급</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>신형만</td>
                  <td>68320점</td>
                  <td>마스터5</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>2</td>
                  <td>흰둥이</td>
                  <td>64840점</td>
                  <td>마스터4</td>
                </tr>
              </tbody>
            </Table>
          </motion.div>
        </Container>
      </Layout>
    </ProtectedPage>
  );
}
