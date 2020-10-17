import React from "react";
import "./Dialogs.scss";
import DialogList from "./DialogList/DialogList";
import DialogMessageList from "./DialogMessageList/DialogMessageList";

const Dialogs = (props) => {
    return (
        <div className="dialogs">

            <DialogList dialogList={props.dialogs.dialogList}/>
            <DialogMessageList dialogMessageList={props.dialogs.dialogMessageList}/>
        </div>
    )
}

export default Dialogs;