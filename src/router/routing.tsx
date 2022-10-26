import { About } from "../pages/about";
import React, { ReactNode } from "react";
import { Posts } from "../pages/posts";
import { PostIdPage } from "../pages/post-id-page";
import { Navigate } from "react-router-dom";

interface Routes {
  path: string;
  component: ReactNode;
}

export const privateRoutes: Routes[] = [
  { path: "/about", component: <About /> },
  { path: "/posts", component: <Posts /> },
  { path: "/posts/:id", component: <PostIdPage /> },
  { path: "*", component: <Navigate to="/posts" /> },
];
