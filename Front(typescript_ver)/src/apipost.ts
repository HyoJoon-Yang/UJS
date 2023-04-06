import axios from "axios";
import { QueryFunctionContext } from "@tanstack/query-core";
import Cookie from "js-cookie";
import { Post,Comment } from "./types";
const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1/",
  withCredentials: true
}); 

export const getPosts = () => instance.get(`commu/posts/`).then((r) => r.data);


export const getMe = () =>
  instance.get(`users/me`).then((response) => response.data);

export const getPostsDetail = async ({ queryKey }: QueryFunctionContext) => {
    const [_, postPk] = queryKey;
    return await instance
      .get(`commu/posts/${postPk}`)
      .then((response) => response.data);
  };

  
  export interface Owner{
    avator: string,
    name: string,
    nickname: string,
    email: string

    
}
  export interface Board {
    kind: string;
    title: string;
    content: string;
    image:any;
    owner: Owner;
  }
  export const createBoard = ({kind, title, content, owner, image}: Board) =>
  instance
    .post(
      `commu/posts/`,
      { kind,title, content,owner, image},
      {
        headers: {
          "Content-Type": "multipart/form-data",
          "X-CSRFToken": Cookie.get("csrftoken") || "",
        },
      }
      
      
    )
    .then((response) => response.data);

    export const deletePost = (postPk: number) =>
    instance.delete(`commu/posts/${postPk}`, {
      headers: {
        "X-CSRFToken": Cookie.get("csrftoken") || "",
      },
    }).then((response) => response.data);




    export const getComments = () => instance.get(`comment/`).then((r) => r.data);

    export const createComment = ({ post, contents,owner,  }:Comment) =>
    instance
      .post(
        `comment/`,
        {  post, contents,owner},
        {
          headers: {
            "X-CSRFToken": Cookie.get("csrftoken") || "",
          },
        }
      )
      .then((response) => response.data);