import React from "react";
import "./DialogMessageList.scss";
import DialogMessageItem from "./DialogMessageItem/DialogMessageItem";

const DialogMessageList = (props) => {
    
    const dialogMessagesElements = props.dialogMessageList.map(item =>
        <DialogMessageItem
            isMyMessage={item.isMyMessage}
            message={item.message}
        />);

    return (
        <div className="dialog-message-list">
            {dialogMessagesElements}
        </div>
    )
}

export default DialogMessageList;