import { Layout } from "src/components/layout/Layout";
import Carousels from "../components/Carousels";
import Cards from "src/components/Cards";
import "../styles/Main.css";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import React from "react";
import ProtectedPage from "src/components/ProtectedPage";

export default function Main() {
  return (
    <ProtectedPage>
      <Layout>
        <Container id="main_contain">
          <Carousels id="main_carousels" />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <Container id="cardsContain">
              <Cards
                imgSrc="img/reminder.svg"
                title="나의 자세를 분석해보세요"
                text="업로드한 영상으로 UJS의 AI가 당신의 스윙을 분석합니다."
                link="/comparison"
              />
              <Cards
                imgSrc="img/online_discussion.svg"
                title="직접 소통해보세요"
                text="당신은 혼자가 아닙니다! 다른 사용자들과 활발한 교류를 통해 많은 것을 얻어가세요."
                link="/commu"
              />
              <Cards
                imgSrc="img/projections.svg"
                title="꾸준한 성장을 느껴보세요"
                text="날짜별 진단 리스트를 확인할 수 있습니다. 전과 달라진 실력을 눈으로 확인해보세요."
                link="/user-list"
              />
            </Container>
          </motion.div>
        </Container>
      </Layout>
    </ProtectedPage>
  );
}
