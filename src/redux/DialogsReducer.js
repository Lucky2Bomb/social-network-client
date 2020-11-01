const SEND_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_CHAT = "UPDATE-NEW-MESSAGE-CHAT";

let initialState = {
    dialogList: [{
        id: 1,
        author: "Nikolai Drozdov",
        message: "Nice animal!",
        avatar: "https://katun24.ru/sites/default/files/images/16764_705823479501415_4535084995626581082_n.jpg"
    }, {
        id: 2,
        author: "Anna Karenina",
        message: "Check my book.",
        avatar: "https://mtdata.ru/u5/photo0FEA/20511228952-0/original.jpg"
    }, {
        id: 3,
        author: "Prima Victoria",
        message: "WRRRR WRRRR",
        avatar: "https://wiki.gcdn.co/images/thumb/4/4a/Primo_Victoria_art_3.jpg/800px-Primo_Victoria_art_3.jpg"
    }, {
        id: 4,
        author: "San Diego",
        message: "I from Azur L.",
        avatar: "https://i.ytimg.com/vi/McCe-myjx4A/hqdefault.jpg"
    }, {
        id: 5,
        author: "Ded Insaid",
        message: "I am dead inside",
        avatar: "https://s.starladder.com/uploads/team_logo/3/f/4/1/meta_tag_8035f8c2f435bada12afd948c2598473.jpg"
    },],

    dialogMessageList: [{
        isMyMessage: true,
        message: "Hi!",
    }, {
        isMyMessage: false,
        message: "Hi!",
    }, {
        isMyMessage: true,
        message: "What is your name?",
    }, {
        isMyMessage: false,
        message: "My name is Anna.",
    }, {
        isMyMessage: true,
        message: "How are you?",
    }, {
        isMyMessage: false,
        message: "I'm fine.",
    },],
    dialogMessageText: "Hi!",
};

const dialogsReducer = (state = initialState, action) => {
    let stateCopy = { ...state };
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                isMyMessage: true,
                message: state.dialogMessageText
            }
            stateCopy.dialogMessageList = [...state.dialogMessageList];
            stateCopy.dialogMessageList.push(newMessage);
            stateCopy.dialogMessageText = "";
            return stateCopy;

        case UPDATE_NEW_MESSAGE_CHAT:
            stateCopy.dialogMessageText = action.message;
            return stateCopy;

        default:
            return stateCopy;
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

export default dialogsReducer;