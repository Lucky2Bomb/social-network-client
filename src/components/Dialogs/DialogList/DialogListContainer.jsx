import React from "react";
import DialogList from "./DialogList";
import { connect } from "react-redux";

// const DialogListContainer = (props) => {
//     let state = props.store.getState();
//     return (
//         <DialogList dialogList={state.dialogs.dialogList}/>
//     )
// }

let mapStateToProps = (state) => {
    return {
        dialogList: state.dialogs.dialogList
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const DialogListContainer = connect(mapStateToProps, mapDispatchToProps)(DialogList);

export default DialogListContainer;