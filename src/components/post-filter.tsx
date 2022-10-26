import React, { Dispatch } from "react";
import { MyInput } from "./UI/input/my-input";
import { MySelect } from "./UI/select/my-select";
import {FilterI} from "../pages/posts";

interface Props {
  filter: FilterI;
  setFilter: Dispatch<FilterI>;
}


export const PostFilter = ({filter, setFilter}: Props) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={(e) => setFilter({...filter, query: e.target.value})}
                placeholder="Search"
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort:selectedSort})}
                defaultValue="Sort "
                options={[
                    { value: "title", name: " By name" },
                    { value: "body", name: "By description" },
                ]}
            />
        </div>
    );
};