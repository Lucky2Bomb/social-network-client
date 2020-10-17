import React from "react";
// import imageAvatar from "./question-mark-image.png";

const Post = (props) => {
    return (
        <div className="post-item">
            <div className="post-item__img-avatar-wrapper">
                <img className="post-item__img-avatar" src="https://f1.24open.ru/XHTavd5Vvb.jpg" alt="" />
            </div>
            <div className="post-item__author">
                {props.author}
            </div>
            <div className="post-item__message-wrapper">
                <p className="post-item__message">
                    {props.message}
                </p>
            </div>
            <div className="post-item__like-wrapper">
                <div className="post-item__like">
                    {props.likeCount} likes <button className="button-default">like</button>
                </div>
            </div>
        </div>
    );
}

export default Post;    