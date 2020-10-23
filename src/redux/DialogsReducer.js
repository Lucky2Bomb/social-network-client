const SEND_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_CHAT = "UPDATE-NEW-MESSAGE-CHAT";

const DialogsReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                isMyMessage: true,
                message: state.dialogMessageText
            }
            state.dialogMessageList.push(newMessage);
            state.dialogMessageText = "";
            return state;

        case UPDATE_NEW_MESSAGE_CHAT:
            state.dialogMessageText = action.message;
            return state;
            
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateNewMessageChatActionCreator = (message) => {
    return {
        type: UPDATE_NEW_MESSAGE_CHAT,
        message
    }
}

export default DialogsReducer;