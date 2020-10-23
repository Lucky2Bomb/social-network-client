import React from "react";
import "./DialogChatItem.scss";

const DialogChatItem = (props) => {
    let messageClass = null;
    if (props.isMyMessage) {
        messageClass = "dialog-message-item_my-message";
    } else {
        messageClass = "dialog-message-item_not-my-message";
    }
    return (
        <div className="dialog-message-item">
            <div className={messageClass}>
                {props.message}
            </div>
        </div>
    )
}

export default DialogChatItem;