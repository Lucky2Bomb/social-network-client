const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    posts: [{
        id: 0,
        author: "Ivan Ivanovchenkov",
        message: "Nunc fermentum placerat varius. ",
        likeCount: 35
    }, {
        id: 1,
        author: "Ivan Ivanovchenkov",
        message: "Proin iaculis ante in felis ornare eleifend. ",
        likeCount: 31

    }, {
        id: 2,
        author: "Ivan Ivanovchenkov",
        message: "Nunc ornare eleifend mattis.",
        likeCount: 22

    }, {
        id: 3,
        author: "Ivan Ivanovchenkov",
        message: "Iaculis ante in felis ornare eleifend. Nullam aucto, volutpat lacinia.",
        likeCount: 111

    }, {
        id: 4,
        author: "Ivan Ivanovchenkov",
        message: "Nunc fermentum ante in felis ornare eleifend.lectus. Donec mattis.",
        likeCount: 85

    }, {
        id: 5,
        author: "Ivan Ivanovchenkov",
        message: "Volutpat nunc tincidunt, tincidunt tellus. Vivamauris vitae sapien scelerisque faucibuseget aliquet augue risus, commodo et nunc mollis.",
        likeCount: 39

    }, {
        id: 6,
        author: "Ivan Ivanovchenkov",
        message: "Nunc fermentum placerat varius. Proin iaculis ante in felis ornare eleifend. Nullam auctor quam pretium, volutpat nunc tincidunt, tincidunt tellus. Vivamus vel augue dapibus nisi condimentum gravida a vehicula mauris. Sed malesuada turpis vitae sapien scelerisque faucibus. Vestibulum quis vestibulum ante. In finibus consequat turpis in pulvinar. Integer eget aliquet augue, et efficitur sapien. Aliquam diam turpis, faucibus tincidunt porta et, dictum id erat. In nibh odio, lobortis eget erat vitae, cursus ultrices tortor. Sed quis risus lacus. Nullam pretium at quam a rutrum. In rhoncus euismod risus, a ullamcorper magna. Vestibulum vel enim at augue interdum mollis. Quisque mauris augue, commodo et nunc mollis, volutpat finibus lectus. Donec tincidunt lacinia mattis.",
        likeCount: 21

    }, {
        id: 7,
        author: "Ivan Ivanovchenkov",
        message: "Nunc mollis, volutpat finibus lectus. Donec tincidunt lacinia mattis.",
        likeCount: 53

    }, {
        id: 8,
        author: "Ivan Ivanovchenkov",
        message: "Nunc fermentum placerat varius. Proin iaculis ante in felis ornare eleifend. Nullam auctor quam pretium, volutpat nunc tincidunt, tincidunt tellus. Vivamus vel augue dapibus nisi condimentum gravida a vehicula mauris. Sed malesuada turpis vitae sapien scelerisque faucibus. Vestibulum quis vestibulum ante. In finibus consequat turpis in pulvinar. Integer eget aliquet augue, et efficitur sapien. Aliquam diam turpis, faucibus tincidunt porta et, dictum id erat. In nibh odio, lobortis eget erat vitae, cursus ultrices tortor. Sed quis risus lacus. Nullam pretium at quam a rutrum. In rhoncus euismod risus, a ullamcorper magna. Vestibulum vel enim at augue interdum mollis. Quisque mauris augue, commodo et nunc mollis, volutpat finibus lectus. Donec tincidunt lacinia mattis.",
        likeCount: 22

    }, {
        id: 9,
        author: "Ivan Ivanovchenkov",
        message: "Proin iaculis ante in felis ornare eleifend.",
        likeCount: 12

    }, {
        id: 10,
        author: "Ivan Ivanovchenkov",
        message: "Tincidunt tellus. Vivamus gravida a vehicula mauris malesuada turpis.",
        likeCount: 6

    }],
    newPostText: "new post text"
};

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:

            let newPost = {
                id: 11,
                author: "Ivan Ivanovchenkov",
                message: state.newPostText,
                likeCount: 0
            }
            state.posts.push(newPost);
            state.newPostText = "";
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.text;
            return state;

        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        text
    }
}

export default ProfileReducer;