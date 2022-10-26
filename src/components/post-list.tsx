import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Post, PostItem } from "./post-item";

interface Props {
  posts: Post[];
  title: string;
  remove: (Object: Post) => void;
}

export const PostList = ({ posts, title, remove }: Props) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}>Posts not found</h1>;
  }
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <PostItem
              number={index + 1 }
              post={post}
              remove={remove}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};
