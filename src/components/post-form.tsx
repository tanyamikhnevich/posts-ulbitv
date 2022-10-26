import React, {useState} from 'react';
import {MyInput} from "./UI/input/my-input";
import {MyButton} from "./UI/button/my-button";
import {Post} from "./post-item";

interface Props {
  create: ( Object:Post ) => void;
}

export const PostForm = ({create}: Props) => {
    const [post, setPost] = useState({
        title: "",
        body: "",
    });

    const addNewPost = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({
            title: "",
            body: "",
        });
    };

    return (
        <form>
            <MyInput
                type="text"
                placeholder="Post name"
                value={post.title}
                onChange={(event) => setPost({...post, title: event.target.value})}
            />
            <MyInput
                type="text"
                placeholder="Post description"
                value={post.body}
                onChange={(event) => setPost({...post, body: event.target.value})}
            />
            <MyButton onClick={addNewPost} title={"do post"} />
        </form>
    );
};
