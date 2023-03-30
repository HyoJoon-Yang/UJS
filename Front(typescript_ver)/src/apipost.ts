import axios from "axios";
import { QueryFunctionContext } from "@tanstack/query-core";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1/",
});

export const getPosts = () => instance.get(`commu/posts/`).then((r) => r.data);


export const getPostsDetail = async ({ queryKey }: QueryFunctionContext) => {
    const [_, postPk] = queryKey;
    return await instance
      .get(`commu/posts/${postPk}`)
      .then((response) => response.data);
  };
  export const getComments = () => instance.get(`comment/`).then((r) => r.data);