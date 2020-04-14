import {useEffect, useState} from "react";

function PostList({handlePostOpen}) {
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

    return (
        <>
            <div>Posts Page</div>
            {
                posts.length !== 0 ?
                <ul>
                    {
                        posts.map((element) => {
                            return (
                                <li key={element.id} onClick={handlePostClick} data-id={element.id}>
                                    <div>User: {element.userId}</div>
                                    <div>Post Title: {element.title}</div>
                                    <div>Post Body: {element.body}</div>
                                </li>
                            )
                        })
                    }
                </ul> :
                    <div>Loading...</div>
            }
        </>
    )
}

export default PostList