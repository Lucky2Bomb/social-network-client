import React from "react";
import "./Dialogs.scss";
import DialogList from "./DialogList/DialogList";
import DialogMessageList from "./DialogMessageList/DialogMessageList";

const Dialogs = (props) => {
    return (
        <div className="dialogs">

            <DialogList />
            <DialogMessageList />
        </div>
    )
}

export default Dialogs;