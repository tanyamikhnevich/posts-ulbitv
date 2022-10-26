import React from "react";
import "./../app/app.css";
import {MyButton} from "./UI/button/my-button";
import { useNavigate} from 'react-router-dom'


interface Props {
  number: number,
  post: Post
  remove: (Object: Post) => void;
}
export interface Post {
  id: number;
  title: string;
  body: string;
}


export const PostItem = ({post, number, remove}: Props) => {
  const router = useNavigate()
  return (
    <div>
      <div className="post">
        <div className={"post__content"}>
          <strong>
            {post.id}. {post.title}
          </strong>
          <div>{post.body}</div>
        </div>
        <div className={"post__btns"}>
          <MyButton onClick={() => router(`/posts/${post.id}`)} title={"Open"} />
          <MyButton onClick={() => remove( post )} title={"Delete"} />
        </div>
      </div>
    </div>
  );
};
