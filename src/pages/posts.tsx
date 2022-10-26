import React, { useEffect, useRef, useState } from "react";
import "./../app/app.css";
import { Post } from "../components/post-item";
import { usePosts } from "../components/hooks/usePosts";
import { useFetching } from "../components/hooks/useFetching";
import PostService from "../API/post-service";
import { getPagesCount } from "../components/utils/pages";
import { MyButton } from "../components/UI/button/my-button";
import { PostForm } from "../components/post-form";
import { MyModal } from "../components/UI/my-modal/my-modal";
import { PostFilter } from "../components/post-filter";
import { Loader } from "../components/UI/loader/loader";
import { PostList } from "../components/post-list";
import { Pagination } from "../components/pagination/pagination";
import { useObserver } from "../components/hooks/use-observer";
import { MySelect } from "../components/UI/select/my-select";

export interface FilterI {
  sort?: "title" | "body";
  query: string;
}

export function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  //const bodyInputRef = useRef(); // получить доступ к ДОМ элементу и у этого элемента забрать значение
  const [filter, setFilter] = useState<FilterI>({
    query: "",
  });
  const [modal, setModal] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [limit, setLimit] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const sortedAndSearchedPosts = usePosts({
    posts,
    sort: filter.sort,
    query: filter.query,
  }); // кастомный хук
  const lastElement = useRef<any>();

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPagesCount(totalCount, limit));
  });

  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page + 1);
  });

  useEffect(() => {
    (async () => await fetchPosts())();
  }, [page, limit]);

  const createPost = (newPost: Post) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post: Post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changePage = (page: number) => {
    setPage(page);
  };

  return (
    <div className="App">
      <MyButton
        title="Make post"
        onClick={() => setModal(true)}
        style={{ marginTop: 30 }}
      />
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <PostFilter filter={filter} setFilter={setFilter} />
      <MySelect
        defaultValue={"Count of elements on page"}
        options={[
          { value: '5', name: "5" },
          { value: "10", name: "10" },
          { value: "25", name: "25" },
          { value: "-1", name: "All" },
        ]}
        value={`${limit}`}
        onChange={(value) => setLimit(Number(value)??5)}
      />
      {postError && <h1>Error...</h1>}
      {isPostsLoading && (
        <div
          style={{
            marginTop: "50px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Loader />
        </div>
      )}
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="Posts"
      />
      <div style={{ height: 5 }} ref={lastElement} />
      <Pagination totalPages={totalPages} page={page} changePage={changePage} />
    </div>
  );
}
