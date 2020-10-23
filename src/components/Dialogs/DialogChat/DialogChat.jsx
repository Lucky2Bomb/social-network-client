import React from "react";
import "./DialogChat.scss";
import DialogMessageItem from "./DialogChatItem/DialogChatItem";
import DialogChatInput from "./DialogChatInput/DialogChatInput";
import { updateNewMessageChatActionCreator, sendMessageActionCreator } from "../../../redux/DialogsReducer";

const DialogChat = (props) => {

    const dialogMessagesElements = props.dialogMessageList.map(item =>
        <DialogMessageItem
            isMyMessage={item.isMyMessage}
            message={item.message}
        />);

    let newMessageElement = React.createRef();
    let addMessage = () => {
        props.dispatch(sendMessageActionCreator());
    }

    let onMessageChange = () => {
        let message = newMessageElement.current.value;
        props.dispatch(updateNewMessageChatActionCreator(message));
    }

    return (
        <div className="dialog-message-list">
            <DialogChatInput refElement={newMessageElement} func={addMessage} onChange={onMessageChange} value={props.dialogMessageText} />
            {dialogMessagesElements}
        </div>
    )
}

export default DialogChat;