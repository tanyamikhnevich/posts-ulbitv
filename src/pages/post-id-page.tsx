import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../components/hooks/useFetching";
import PostService from "../API/post-service";
import { Loader } from "../components/UI/loader/loader";
import {Post} from "../components/post-item";

interface Comments {
  id: number,
  email: string,
  body: string
}

export const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comments[]>([]);
  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const response = await PostService.getById(params.id);
    setPost(response.data);
  });
  const [fetchComments, isComLoading, comError] = useFetching(async () => {
    const response = await PostService.getComments(params.id);
    setComments(response.data);
  });
  useEffect(() => {
    fetchPostById().then();
    fetchComments().then();
  }, []);

  // if (!post) return null
  return (
    <div>
      <h1>Open post {params.id}</h1>
      {isLoading || !post? (
        <Loader />
      ) : (
        <div>
          {post.id}. {post.title}
        </div>
      )}
      {error && <div>{error}</div>}
      <h1>Comments</h1>
      {isComLoading ? (
        <Loader />
      ) : (
        <div>
          {comments.map((comm) => (
            <div key={comm.id} style={{ marginTop: 20 }}>
              <h5>{comm.email}</h5>
              <div>{comm.body}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
