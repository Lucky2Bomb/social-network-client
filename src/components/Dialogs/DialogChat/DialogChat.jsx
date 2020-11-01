import React from "react";
import "./DialogChat.scss";
import DialogMessageItem from "./DialogChatItem/DialogChatItem";
import DialogChatInput from "./DialogChatInput/DialogChatInput";

const DialogChat = (props) => {
    const dialogMessagesElements = props.dialogMessageList.map(item =>
        <DialogMessageItem
            isMyMessage={item.isMyMessage}
            message={item.message}
        />);

    let newMessageElement = React.createRef();
    let onAddMessage = () => {
        props.onAddMessage();
    }

    let onMessageChange = () => {
        let message = newMessageElement.current.value;
        props.onMessageChange(message);
    }

    return (
        <div className="dialog-message-list">
            <DialogChatInput refElement={newMessageElement} func={onAddMessage} onChange={onMessageChange} value={props.dialogMessageText} />
            {dialogMessagesElements}
        </div>
    )
}

export default DialogChat;