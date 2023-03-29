import "../styles/Login.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { motion } from "framer-motion";
import React from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { emailLogIn } from "src/api";
import ProtectedLogin from "src/components/ProtectedLogin";
import { useNavigate } from "react-router-dom";
import { Text } from "@chakra-ui/react";

function LogIn() {
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
          <LoginForm />
          <hr />
          <button>
            <img id="google_logo" alt="google-icon" src="img/google-icon.png" />
            구글 로그인하기
          </button>
        </div>
      </motion.div>
    </ProtectedLogin>
  );
}

interface IForm {
  email: string;
  password: string;
}

function LoginForm() {
  const { register, handleSubmit } = useForm<IForm>();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const mutation = useMutation(emailLogIn, {
    onSuccess: () => {
      console.log("mutation is successful");
      navigate("/");
      queryClient.refetchQueries(["me"]);
    },
    onError: () => {
      console.log("mutation has an error");
    },
  });
  const onSubmit = ({ email, password }: IForm) => {
    mutation.mutate({ email, password });
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          required
          {...register("email", {
            required: true,
          })}
          type="email"
          placeholder="Enter email"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control
          required
          {...register("password", {
            required: true,
          })}
          type="password"
          placeholder="Password"
        />
      </Form.Group>
      {mutation.isError ? (
        <Text color="red" textAlign={"center"} fontSize="sm">
          이메일 또는 비밀번호가 일치하지 않습니다
        </Text>
      ) : null}
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
