import {useEffect, useState} from "react";
import {title, list, listElementStyle, logOutButton} from "./style";

function PostList({handlePostOpen, handleSignOut}) {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const storage = window.localStorage;
        const postsCreateDate = +storage.getItem("postsCreatedAt");
        const date = new Date().getTime();
        const isOneDayDiff = (date - postsCreateDate)/60/60 >= 24;
        const posts = storage.getItem("posts");
        if (!posts || isOneDayDiff) {
            (
                async () => {
                    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
                    const data = await res.json();

                    const postsCreatedAt = new Date().getTime() + "";
                    storage.setItem("posts", JSON.stringify(data));
                    storage.setItem("postsCreatedAt", postsCreatedAt);
                    setPosts(data);
                }
            )().catch((error) => console.log(error))
        } else {
            setPosts(JSON.parse(posts))
        }
    }, []);

    const handlePostClick = (event) => {
        const id = event.currentTarget.getAttribute("data-id");
        handlePostOpen(id)
    };

    const handleLogOut = () => {
        handleSignOut()
    };

    return (
        <>
            {
                posts.length !== 0 ?
                    <>
                        <div>Posts Page</div>
                        <button style={logOutButton} onClick={handleLogOut}>Log Out</button>
                        <ul style={list}>
                            {
                                posts.map((element) => {
                                    return (
                                        <li style={listElementStyle} key={element.id} onClick={handlePostClick} data-id={element.id}>
                                            <div>User: {element.userId}</div>
                                            <div style={title}>{element.title}</div>
                                            <div>{element.body}</div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </> :
                    <div>Loading...</div>
            }
        </>
    )
}

export default PostList