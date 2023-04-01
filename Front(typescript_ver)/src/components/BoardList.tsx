import React from "react";
import "../styles/BoardList.css";
import { Link } from "react-router-dom";
import { PostList } from "../types";



  const Post = ({
    pk,
    kind,
    title,
    contents,
    owner,
    created_at,
    updated_at,
  }: PostList) => (
    <tr>
      <td className="first-td">{pk}</td>
      <td><Link to={`detail/${pk}`}>{title}</Link></td>
      <td className="last-td">{created_at}</td>

    </tr>

  )

export default Post;