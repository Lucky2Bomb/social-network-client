import React from "react";
import "./DialogChatInput.scss";

    const DialogChatInput = (props) => {
    return (
        <div className="dialog-chat-input">
            <textarea ref={props.refElement} value={props.value} onChange={props.onChange} className="textarea-default dialog-chat-input__textarea">

            </textarea><br />
            <button onClick={props.func} className="button-default dialog-chat-input__button">Send</button>
        </div>
    )
}

export default DialogChatInput;