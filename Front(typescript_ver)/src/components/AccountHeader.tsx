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
      {user?.avator ? <Avatar id="profile-img" src={`http://localhost:8000${user?.avator}`} /> : <Avatar id="profile-img"/>}
      

      <span id="profile-desc">
        <UserAccountModal />
        <h3>
          <Text as="b">{user?.nickname}</Text>
        </h3>
        <p>
          게시글 0 | <Link to="/user-list">진단목록</Link> 0
        </p>
      </span>
    </Container>
  );
}

// export default function AccountHeader() {
//   return (
//     <Container fluid id="account-bg">
//       <div id="profile-img"></div>
//       <span id="profile-desc">
//         <UserAccountModal />
//         <h3>
//           <b>User name</b>
//         </h3>
//         <p>
//           게시글 0 | <Link to="/user-list">진단목록</Link> 0
//         </p>
//       </span>
//     </Container>
//   );
// }
