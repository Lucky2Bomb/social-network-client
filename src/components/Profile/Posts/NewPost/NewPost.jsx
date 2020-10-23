import React from "react";
import "./NewPost.scss";

const NewPost = (props) => {
    return (
        <div className="new-post">
            <textarea ref={props.refElement} onChange={props.onChange} value={props.newPostText} placeholder="What to do..." className="textarea-default new-post__textarea" /><br />
            <button onClick={props.func} className="button-default new-post__button-send">send</button>
        </div>
    );
}

export default NewPost;