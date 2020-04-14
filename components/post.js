import {useEffect, useState} from "react";
import {list, postStyle, title, listElementStyle, backButton, logOutButton} from "./style"

export default function Post({handlePostListOpen, handleSignOut, id}) {
    const [post, setPost] = useState(null);
    useEffect(() => {
        const storage = window.localStorage;
        const postsJson = storage.getItem("posts");
        const posts = JSON.parse(postsJson);
        const currentPost = posts.find((post) => post.id === +id);
        if (!currentPost.comments) {
            (
                async () => {
                    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
                    currentPost.comments = await res.json();
                    window.localStorage.setItem("posts", JSON.stringify(posts));
                    setPost(currentPost);
                }
            )().catch((error) => console.log(error))
        } else {
            setPost(currentPost);
        }

    }, []);

    const handleBackClick = () => {
        handlePostListOpen();
    };

    const handleLogOut = () => {
        handleSignOut();
    };

    return (
        <>
            {
                post ? <div style={postStyle}>
                    <button style={backButton} onClick={handleBackClick}>Back to posts page</button>
                    <button style={logOutButton} onClick={handleLogOut}>Log Out</button>
                    <span> User: {post.userId}</span>
                    <span style={title}>{post.title}</span>
                    <span>{post.body}</span>
                    <ul style={list}>
                        {
                            post.comments &&
                            post.comments.map((comment) => {
                                return (
                                    <li style={listElementStyle} key={comment.id}>
                                        <div>Username: {comment.name}</div>
                                        <div>{comment.body}</div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div> :
                    <div>Loading...</div>
            }
        </>

    )
}