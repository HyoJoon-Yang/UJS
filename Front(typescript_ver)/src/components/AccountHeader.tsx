import UserAccountModal from "../components/UserAccountModal";
import "../styles/Account.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import useUser from "src/lib/useUser";

export default function AccountHeader() {
  const { user } = useUser();
  return (
    <Container fluid id="account-bg">
      {user?.avator != null ? (
        <div
          id="profile-img"
          style={{
            backgroundImage: `url("http://localhost:8000${user?.avator}")`,
            backgroundSize: "cover",
          }}
        ></div>
      ) : <div id="profile-img" ></div> }

      <span id="profile-desc">
        <UserAccountModal />
        <h3>
          <b>{user?.nickname ? user?.nickname : "닉네임 설정"}</b>
        </h3>
        <p>
          게시글 0 | <Link to="/user-list">진단목록</Link> 0
        </p>
      </span>
    </Container>
  );
}
