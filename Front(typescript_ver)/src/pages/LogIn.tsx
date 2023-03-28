import "../styles/Login.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { motion } from "framer-motion";
import React from "react";

function LogIn() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ rotate: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <div className="login_contain">
        <img id="UJS_logo" alt="UJS_logo" src="img/logo.svg" />
        <LoginForm />
        <hr />
        <button>
          <img id="google_logo" alt="google-icon" src="img/google-icon.png" />
          구글 로그인하기
        </button>
      </div>
    </motion.div>
  );
}

function LoginForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="로그인 유지하기" />
      </Form.Group>
      <Button id="LoginFormSubmit" type="submit">
        로그인하기
      </Button>
    </Form>
  );
}

export default LogIn;
