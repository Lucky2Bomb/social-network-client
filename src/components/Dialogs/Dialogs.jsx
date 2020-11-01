import React from "react";
import "./Dialogs.scss";
import DialogListContainer from "./DialogList/DialogListContainer";
import DialogChatContainer from "./DialogChat/DialogChatContainer";

const Dialogs = (props) => {
    return (
        <div className="dialogs">

            <DialogListContainer/>
            <DialogChatContainer/>
        </div>
    )
}

export default Dialogs;