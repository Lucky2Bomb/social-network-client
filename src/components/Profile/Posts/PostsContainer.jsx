import React from "react";
import { addPost, updateNewPostText } from "../../../redux/ProfileReducer";
import Posts from "./Posts";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profile.posts,
        newPostText: state.profile.newPostText
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         onAddPost: () => {
//             dispatch(addPostActionCreator());
//         },
//         onPostChange: (text) => {
//             dispatch(updateNewPostTextActionCreator(text));
//         }
//     }
// }

const PostsContainer = connect(mapStateToProps, {
    onAddPost: addPost,
    onPostChange: updateNewPostText
})(Posts);

export default PostsContainer;