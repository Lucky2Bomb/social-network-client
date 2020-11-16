import React from "react";
import Post from "./Post/Post";
import "./Posts.scss";
import NewPost from "./NewPost/NewPost";

const Posts = (props) => {
    const dataPostsElements = props.posts.map(item =>
        <Post
            author={item.author}
            message={item.message}
            likeCount={item.likeCount}
        />).reverse();

    let newPostElemenent = React.createRef();

    let onAddPost = () => {
        props.onAddPost();
    }

    let onPostChange = () => {
        let text = newPostElemenent.current.value;
        props.onPostChange(text);
    }

    return (
        <div className="posts">
            <NewPost refElement={newPostElemenent} func={onAddPost} onChange={onPostChange} newPostText={props.newPostText} />
            {dataPostsElements}


        </div>
    );
}

export default Posts;