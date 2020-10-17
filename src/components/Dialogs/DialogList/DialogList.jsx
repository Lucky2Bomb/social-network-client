import React from "react";
import "./DialogList.scss";
import DialogListItem from "./DialogListItem/DialogListItem";

const DialogList = (props) => {

    const dataDialogListItems = props.dialogList.map(item =>
        <DialogListItem
            id={item.id}
            author={item.author}
            message={item.message}
            avatar={item.avatar}
        />
    );

    return (
        <div className="dialog-list">
            {dataDialogListItems}
        </div>
    )
}

export default DialogList;