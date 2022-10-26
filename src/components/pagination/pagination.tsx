import React from "react";
import { getPagesArray } from "../utils/pages";

interface Props {
  totalPages: number;
  page: number;
  changePage: (page: number) => void;
}

export const Pagination = ({ totalPages, page, changePage }: Props) => {
  let pagesArray = getPagesArray(totalPages);
  return (
    <div className="page__wrapper">
      {pagesArray.map((p) => (
        <span
          onClick={() => changePage(p)}
          className={page === p ? "page page__current" : "page"}
          key={p}
        >
          {p}
        </span>
      ))}
    </div>
  );
};