import "../styles/First.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import React from "react";
import ProtectedLogin from "src/components/ProtectedLogin";

export default function First() {
  return (
    <ProtectedLogin>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <div className="first_contain">
          <img id="UJS_logo" alt="UJS_logo" src="img/logo.svg" />
          <Link to="/login">
            <button>로그인하기</button>
          </Link>
          <p>
            UJS 계정이 없나요? <Link to="/signup">회원가입</Link>하기
          </p>
        </div>
      </motion.div>
    </ProtectedLogin>
  );
}
