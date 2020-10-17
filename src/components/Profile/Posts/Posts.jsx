import React from "react";
import Post from "./Post/Post";

const Posts = (props) => {

    const dataPostsElements = props.posts.map(item =>
        <Post
            author={item.author}
            message={item.message}
            likeCount={item.likeCount}
        />);

    return (
        <div className="posts">
            Profile posts
            <form>
                <textarea placeholder="What to do..." /><br />
                <button className="button-default">send</button>
            </form>
            {dataPostsElements}


        </div>
    );
}

export default Posts;