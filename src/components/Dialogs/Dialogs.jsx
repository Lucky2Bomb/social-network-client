import React from "react";
import "./Dialogs.scss";
import DialogList from "./DialogList/DialogList";
import DialogChat from "./DialogChat/DialogChat";

const Dialogs = (props) => {

    return (
        <div className="dialogs">

            <DialogList dialogList={props.dialogs.dialogList}/>
            <DialogChat 
            dialogMessageList={props.dialogs.dialogMessageList} 
            dispatch={props.dispatch}
            dialogMessageText={props.dialogs.dialogMessageText}/>
        </div>
    )
}

export default Dialogs;