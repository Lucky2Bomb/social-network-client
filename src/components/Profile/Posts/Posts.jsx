import React from "react";
import Post from "./Post/Post";
import "./Posts.scss";
import NewPost from "./NewPost/NewPost";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/ProfileReducer";

const Posts = (props) => {
    const dataPostsElements = props.posts.map(item =>
        <Post
            author={item.author}
            message={item.message}
            likeCount={item.likeCount}
        />).reverse();
    
    let newPostElemenent = React.createRef();
    
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let newText = newPostElemenent.current.value;
        props.dispatch(updateNewPostTextActionCreator(newText));
    }

    return (
        <div className="posts">
            Profile posts
            <NewPost refElement={newPostElemenent} func={addPost} onChange={onPostChange} newPostText={props.newPostText}/>
            {dataPostsElements}


        </div>
    );
}

export default Posts;