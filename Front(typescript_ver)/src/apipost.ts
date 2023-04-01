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
    title: string;
    content: string;
    kind: string;
    owner: Owner;
    image:string;
  }
  export const createBoard = ({ title, content, kind, owner,image }: Board) =>
  instance
    .post(
      `commu/posts/`,
      { title, content, kind,owner},
      {
        headers: {
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

    export const createComment = ({ owner, post, contents }:Comment) =>
    instance
      .post(
        `comment/`,
        { owner, post, contents},
        {
          headers: {
            "X-CSRFToken": Cookie.get("csrftoken") || "",
          },
        }
      )
      .then((response) => response.data);