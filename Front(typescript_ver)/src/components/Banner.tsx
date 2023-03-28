import React from "react";
import { Container } from "react-bootstrap";

interface IBanner {
  title: string;
}

export default function Banner({ title }: IBanner) {
  return (
    <Container fluid style={{ position: "relative" }}>
      <h1
        style={{
          fontWeight: 600,
          position: "absolute",
          color: "white",
          textShadow: "2px 2px 2px black",
          bottom: "20%",
          right: "10%",
          zIndex: 1,
        }}
      >
        {title}
      </h1>
      <img style={{ width: "100%" }} src="img/banner.png" alt="page banner" />
    </Container>
  );
}
