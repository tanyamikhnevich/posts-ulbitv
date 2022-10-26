import { useMemo } from "react";
import { Post } from "../post-item";
import {FilterI} from "../../pages/posts";

export const useSortedPosts = (posts: Post[], sort: FilterI['sort']) => {
  const sortedPosts = useMemo(() => {
    if (sort) {
      return [...posts].sort((a: Post, b: Post) =>
        a[sort].localeCompare(b[sort])
      );
    }
    return posts;
  }, [sort, posts]);
  return sortedPosts;
};

interface UsePostsI {
  posts: Post[];
  query: FilterI['query'];
  sort: FilterI['sort'];
}

export const usePosts = ({posts, sort, query} : UsePostsI) => {
  const sortedPosts = useSortedPosts(posts, sort);
  return useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(query)
    );
  }, [query, sortedPosts]);
};


