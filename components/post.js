import {useEffect, useState} from "react";

const postStyle = {
    display: "flex",
    flexDirection: "column"
};
export default function Post({handlePostListOpen, id}) {
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

    return (
        <>
            {
                post ? <div style={postStyle}>
                    <button onClick={handleBackClick}>Back to posts page</button>
                    <span> User: {post.userId}</span>
                    <span>Post Title: {post.title}</span>
                    <span>Post Body: {post.body}</span>
                    <ul>
                        {
                            post.comments &&
                            post.comments.map((comment) => {
                                return (
                                    <li key={comment.id}>
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