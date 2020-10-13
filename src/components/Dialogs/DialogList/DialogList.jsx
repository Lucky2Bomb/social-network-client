import React from "react";
import "./DialogList.scss";
import DialogListItem from "./DialogListItem/DialogListItem";

const DialogList = (props) => {
    return (
        <div className="dialog-list">
            <DialogListItem to="/dialogs/1" author="Nikolai Drozdov"/>
            <DialogListItem to="/dialogs/2" author="Anna Karenina"/>
            <DialogListItem to="/dialogs/3" author="Prima Victoria"/>
            <DialogListItem to="/dialogs/4" author="San Diego"/>
        </div>
    )
}

export default DialogList;