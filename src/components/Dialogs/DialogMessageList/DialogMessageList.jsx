import React from "react";
import "./DialogMessageList.scss";
import DialogMessageItem from "./DialogMessageItem/DialogMessageItem";

const DialogMessageList = (props) => {
    return (
        <div className="dialog-message-list">
            <DialogMessageItem isMyMessage={true} message="Hi!"/>
            <DialogMessageItem isMyMessage={false} message="Hi!"/>
            <DialogMessageItem isMyMessage={true} message="What is your name?"/>
            <DialogMessageItem isMyMessage={false} message="My name is Anna."/>
            <DialogMessageItem isMyMessage={true} message="How are you?"/>
            <DialogMessageItem isMyMessage={false} message="I'm fine."/>
        </div>
    )
}

export default DialogMessageList;