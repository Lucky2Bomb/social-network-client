import React from "react";
import imageAvatar from "./question-mark-image.png";

const Post = (props) => {
    return (
        <div className="post-item">
            <div className="post-item__img-avatar-wrapper">
                <img className="post-item__img-avatar" src={imageAvatar} alt="" />
            </div>
            <div className="post-item__author">
                {props.author}
            </div>
            <div className="post-item__text-wrapper">
                <p className="post-item__text">
                    {props.message}
                </p>
            </div>
            <div className="post-item__like-wrapper">
                <div className="post-item__like">
                    <button className="button-default">like</button>
                    {props.likeCount} likes
                </div>
            </div>
        </div>
    );
}

export default Post;    