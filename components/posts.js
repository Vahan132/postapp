import {useEffect, useState} from "react";

function PostList({handlePostOpen}) {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        (
            async () => {
                const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
                const data = await res.json();

                window.localStorage.setItem("posts", JSON.stringify(data));
                setPosts(data);
            }
        )().catch((error) => console.log(error))
    }, []);

    const handlePostClick = (event) => {
        const id = event.currentTarget.getAttribute("data-id");
        handlePostOpen(id)
    };

    return (
        <>
            <div>Posts Page</div>
            <ul>
                {
                    posts.length !== 0 &&
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
            </ul>
        </>
    )
}

export default PostList