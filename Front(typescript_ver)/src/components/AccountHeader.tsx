import UserAccountModal from "../components/UserAccountModal";
import "../styles/Account.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import useUser from "src/lib/useUser";
import { Avatar, Text, WrapItem } from "@chakra-ui/react";

export default function AccountHeader() {
  const { user } = useUser();
  return (
    <Container fluid id="account-bg">
      <div id="profile-img" style={{ backgroundImage: `url("http://localhost:8000${user?.avator}")`, backgroundSize: 'cover' }} ></div>

      <span id="profile-desc">
        <UserAccountModal />
        <h3>
          <b>{user?.nickname}</b>
        </h3>
        <p>
          게시글 0 | <Link to="/user-list">진단목록</Link> 0
        </p>
      </span>
    </Container>
  );
}
