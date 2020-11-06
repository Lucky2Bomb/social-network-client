import { createStore, combineReducers } from "redux";
import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";
import navbarReducer from "./NavbarReducer";
import usersReducer from "./UsersReducer";

let reducers = combineReducers({
    navbar: navbarReducer,
    profile: profileReducer,
    dialogs: dialogsReducer,
    users: usersReducer,
});

let store = createStore(reducers);

export default store;