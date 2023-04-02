import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { motion } from "framer-motion";
import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userSignUp } from "src/api";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import ProtectedLogin from "src/components/ProtectedLogin";

function SignUp() {
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
        <div className="login_contain">
          <img id="UJS_logo" alt="UJS_logo" src="img/logo.svg" />
          <SignUpForm />
          <hr />
          <button>
            <img id="google_logo" alt="google-icon" src="img/google-icon.png" />
            구글 계정 연결하기
          </button>
        </div>
      </motion.div>
    </ProtectedLogin>
  );
}

interface IForm {
  email: string;
  password: string;
  nickname: string;
}

function SignUpForm() {
  const { register, handleSubmit } = useForm<IForm>();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const mutation = useMutation(userSignUp, {
    onMutate: () => {
      console.log("mutation starting");
    },
    onSuccess: (data) => {
      console.log("mutation is successful");
      queryClient.refetchQueries(["me"]);
      navigate("/login");
    },
    onError: (error) => {
      console.log("mutation has an error");
    },
  });
  const onSubmit = ({ email, password, nickname }: IForm) => {
    mutation.mutate({ email, password, nickname });
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          required
          {...register("email", { required: true })}
          type="email"
          placeholder="Email"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control
          required
          {...register("password", { required: true })}
          type="password"
          placeholder="Password"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Control
          required
          {...register("nickname", { required: true })}
          type="text"
          placeholder="Nickname"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="로그인 유지하기" />
      </Form.Group>
      <Button id="LoginFormSubmit" type="submit">
        가입하기
      </Button>
    </Form>
  );
}

export default SignUp;
