import { Layout } from "src/components/layout/Layout";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import PostRemoveModal from "../components/PostRemoveModal";
import { useNavigate,useParams } from "react-router-dom";
import "../styles/CommuDetail.css";
import React from "react";
import ProtectedPage from "src/components/ProtectedPage";
import { getPostsDetail,getComments, getPosts, getMe, createComment } from "../apipost";
import { PostList,Comment } from "../types";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

export interface Owner{
  pk: number;
  name: string;
  avatar: string;
}


interface IForm {
  owner: Owner
  post: string
  contents: string;
}

const CommuDetail = () => {  
  // 게시판 관련
  const { postPk } = useParams()  as { postPk: string }; //파라미터 불러오기
  const { data} = useQuery<Comment[]>(["comment"], getComments);
  
  console.log(data)
  const {  data:postData} = useQuery<PostList>(
    ["posts", postPk],
    getPostsDetail
  );
  var kind="";
  if (postData?.kind == "posts"){
    kind = "자유게시판";
  } 
  else if(postData?.kind=="suggest"){
    kind = "건의사항";
  }
  else{
    kind="공지사항";
  }
  let navigate = useNavigate();

// 코멘트관련  
  const { register, handleSubmit } = useForm<IForm>();
  const mutation = useMutation(createComment, {
  
    onMutate: () => {
      console.log("mutation starting");
    },
    onSuccess: (data) => {
      console.log("mutation is successful");
      window.location.replace(`/commu/detail/${postPk}`);
    },
    onError: (error) => {
      console.log("mutation has an error");
    },
  });
  const onSubmit = ({owner,post,contents }: IForm) => {
    post=postPk;
    mutation.mutate({owner,post,contents});
  };



  return (
    <ProtectedPage>
      <Layout>
        <Container style={{ paddingTop: "20px" }}>
          <Container fluid>
            
            <h3>{postData?.title}</h3>
            <h6>작성자 : {postData?.owner?.name ?? "" }  | {kind}</h6>
            <hr />
            <Container
              style={{ height: "550px", fontWeight: "500", fontSize: "20px" }}
            >
              {postData?.image != null ? (<img src={`http://localhost:8000${postData?.image}`}/>
              ) :<img src={`http://localhost:8000/uploads/post/2023/04/02/golf.jpg`}/>  }
                
            </Container>
            <hr />
            <Container id="commu-detail-btn-group">
              <button
                className="commu-detail-btn"
                onClick={() => {
                  navigate(-1);
                }}
              >
                목록으로
              </button>
              {/* <button className="commu-detail-btn">수정하기</button> */}
              <PostRemoveModal />
            </Container>
          </Container>
       
          <Container className="comment-input-form">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <InputGroup className="mb-3">
           
            
              <Form.Control
               required
               {...register("contents", { required: true })}
                maxLength={400}
                placeholder="댓글을 입력하세요. (400자 제한)"
              />
              <Button variant="outline-secondary" type="submit" id="button-addon2">
                작성
              </Button>
            </InputGroup>
             </Form>
            <Container className="comment-form">
              
            {data?.filter((e:any) => e.post == postPk).map((e:any) => (
                
        
                     
              <Row>

                
               
                     
                <Col xs={2}>
                  
                  <div className="comment-user-profile">
                   
                    {e.owner.avator != null ? (
        <div
        className="comment-user-img"
          
          style={{
            
            
            backgroundImage: `url("http://localhost:8000${e.owner?.avator}")`,
            backgroundSize: "cover",
          }}
        ></div>
      ) : <div className="comment-user-img"></div> }
                    


                    <p>{e.owner.nickname}</p>
                    <p>2023-04-05</p>
                  </div>
                </Col>
                <Col xs={10}>
                  <div className="comment-output">
                    {e.contents}
                  </div>
                </Col>
                
              </Row>
               ))}
              <hr />
              
            </Container>
           
          </Container>
        </Container>
      </Layout>
    </ProtectedPage>
  );
}

export default CommuDetail;
