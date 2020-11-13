const SEND_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_CHAT = "UPDATE-NEW-MESSAGE-CHAT";

let initialState = {
    dialogList: [{
        id: 0,
        author: "Nikolai Drozdov",
        message: "Nice animal!",
        avatar: "https://katun24.ru/sites/default/files/images/16764_705823479501415_4535084995626581082_n.jpg"
    }, {
        id: 1,
        author: "Anna Karenina",
        message: "Check my book.",
        avatar: "https://mtdata.ru/u5/photo0FEA/20511228952-0/original.jpg"
    }, {
        id: 2,
        author: "Prima Victoria",
        message: "WRRRR WRRRR",
        avatar: "https://wiki.gcdn.co/images/thumb/4/4a/Primo_Victoria_art_3.jpg/800px-Primo_Victoria_art_3.jpg"
    }, {
        id: 3,
        author: "San Diego",
        message: "I from Azur L.",
        avatar: "https://i.ytimg.com/vi/McCe-myjx4A/hqdefault.jpg"
    }, {
        id: 4,
        author: "Ded Insaid",
        message: "I am dead inside",
        avatar: "https://s.starladder.com/uploads/team_logo/3/f/4/1/meta_tag_8035f8c2f435bada12afd948c2598473.jpg"
    },],

    dialogMessageList: [{
        id: 0,
        isMyMessage: true,
        message: "Hi!",
    }, {
        id: 1,
        isMyMessage: false,
        message: "Hi!",
    }, {
        id: 2,
        isMyMessage: true,
        message: "What is your name?",
    }, {
        id: 3,
        isMyMessage: false,
        message: "My name is Anna.",
    }, {
        id: 4,
        isMyMessage: true,
        message: "How are you?",
    }, {
        id: 5,
        isMyMessage: false,
        message: "I'm fine.",
    },],
    dialogMessageText: "Hi!",
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 6,
                isMyMessage: true,
                message: state.dialogMessageText
            }
            return {
                ...state,
                dialogMessageList: [...state.dialogMessageList, newMessage],
                dialogMessageText: ""
            };

        case UPDATE_NEW_MESSAGE_CHAT:
            return {
                ...state,
                dialogMessageText: action.message
            };

        default:
            return state;
    }
}

export const sendMessage = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateNewMessageChat = (message) => {
    return {
        type: UPDATE_NEW_MESSAGE_CHAT,
        message
    }
}

export default dialogsReducer;