import React from "react";
import { updateNewMessageChatActionCreator, sendMessageActionCreator } from "../../../redux/DialogsReducer";
import DialogChat from "./DialogChat";
import { connect } from "react-redux";

// const DialogChatContainer = (props) => {
//     let state = props.store.getState();

//     let onAddMessage = () => {
//         props.store.dispatch(sendMessageActionCreator());
//     }

//     let onMessageChange = (message) => {
//         props.store.dispatch(updateNewMessageChatActionCreator(message));
//     }

//     return (
//         <DialogChat 
//         onAddMessage={onAddMessage} 
//         onMessageChange={onMessageChange} 
//         dialogMessageList={state.dialogs.dialogMessageList}
//         dialogMessageText={state.dialogs.dialogMessageText}/>
//     )
// }
let mapStateToProps = (state) => {

    return {
        dialogMessageList: state.dialogs.dialogMessageList,
        dialogMessageText: state.dialogs.dialogMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onAddMessage: () => {
            dispatch(sendMessageActionCreator());
        },
        onMessageChange: (message) => {
            dispatch(updateNewMessageChatActionCreator(message));
        }
    }
}

const DialogChatContainer = connect(mapStateToProps, mapDispatchToProps)(DialogChat); 

export default DialogChatContainer;