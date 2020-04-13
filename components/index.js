import React, {useEffect, useState} from "react";
import Login from "../components/login";
import PostList from "../components/posts";
import Post from "../components/post";
import {useDispatch} from "react-redux";

export default function Index(token) {
    const [isLoginPage, setPage] = useState(true);
    const [postId, setPostId] = useState("");
    const dispatch = useDispatch();
    useEffect(() => {
        const storage = window.localStorage;
        const activePostId = storage.getItem("postId");
        const token = storage.getItem("token");

        if (!token) {
            setPage(true);
        } else {
            if (activePostId) {
                setPostId(activePostId);
                setPage(false);
            } else {
                setPage(false)
            }
        }
    }, []);

    const handlePostOpen = (id) => {
        setPostId(id);
        window.localStorage.setItem("postId", id);
    };

    const handlePostListOpen = () => {
        setPostId("");
        window.localStorage.setItem("postId", "");
    };

    const handleSignIn = (password) => {
        const token = btoa(password);
        window.localStorage.setItem("token", token);
        dispatch({type: "SET_TOKEN", token});
        setPage(false);
    };

    const drawPage = () => {
        if (isLoginPage) {
            return (
                <Login handleSignIn={handleSignIn}/>
            )
        } else if (postId === "") {
            return (
                <PostList handlePostOpen={handlePostOpen} />
            )
        } else {
            return (
                <Post handlePostListOpen={handlePostListOpen} id={postId}/>
            )
        }
    };

    return (
        <div>
            {
                drawPage()
            }
        </div>
    );
}