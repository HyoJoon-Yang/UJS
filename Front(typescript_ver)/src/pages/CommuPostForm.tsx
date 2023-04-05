import { Layout } from "../components/layout/Layout";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import React from "react";
import ProtectedPage from "src/components/ProtectedPage";
import { getMe, createBoard } from "src/apipost";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export interface Owner{
  avator: string,
  name: string,
  nickname: string,
  email: string
}
interface IForm {
  kind: string;
  title: string;
  content: string;
  owner:Owner;
  image:any;
}



function CommuPostForm() {
  const { data} = useQuery<Owner>(["users"], getMe); 
  const { register, handleSubmit } = useForm<IForm>();
  const navigate = useNavigate();
  const mutation = useMutation(createBoard, {
    
    onMutate: () => {
      console.log("mutation starting");
    },
    onSuccess: (data) => {
      console.log("mutation is successful");
      navigate("/commu");
    },
    onError: (error) => {
      console.log("mutation has an error");
    },
  });

  const onSubmit = ({kind,title,content,owner,image }: IForm) => {
    console.log(image[0])
    // console.log(kind,title,content,owner,image)
    // console.log(image)
    // if (image != undefined || image != null){
    //   image=image[0]
    // }
    // console.log(image)
    image = image[0]
    mutation.mutate({kind, title,content,owner,image});
  };




  return (
    <ProtectedPage>
      <Layout>
        <Form onSubmit={handleSubmit(onSubmit)}>
        <Container style={{ minHeight: "100vh" }}>
          <InputGroup
            className="mb-3"
            size="sm"
            style={{ marginTop: "30px", height: "50px" }}
          >
            <Form.Select aria-label="Default select example"
            
            required
            {...register("kind", { required: true })}
            >
            
              
              <option>게시판 선택</option>
              <option value="posts">자유게시판</option>
              <option value="notices">공지사항</option>
              <option value="suggest">건의사항</option>
            </Form.Select>
            <Form.Control
              style={{ width: "70%" }}
              required
              {...register("title", { required: true })}
              type="text"
              placeholder="게시판 선택 후 제목 입력"
            />
          </InputGroup>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>글 내용</Form.Label>
            <Form.Control
            required
              as="textarea"
              {...register("content", { required: true })}
              type="text"
              placeholder="내용을 작성해주세요."
              rows={18}
            />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>파일 업로드</Form.Label>
            <Form.Control
            {...register("image")}
            type="file"
            style={{ display: "block" }}
            />
          </Form.Group>
          <Button
            style={{ backgroundColor: "#9DC08B", border: "none" }}
            type="submit"
          >
            작성하기
          </Button>
        </Container>
        </Form>
      </Layout>
    </ProtectedPage>
  );
}












export default CommuPostForm;