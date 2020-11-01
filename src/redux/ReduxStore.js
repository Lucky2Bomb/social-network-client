import { createStore, combineReducers } from "redux";
import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";
import navbarReducer from "./NavbarReducer";

let reducers = combineReducers({
    navbar: navbarReducer,
    profile: profileReducer,
    dialogs: dialogsReducer,
});

let store = createStore(reducers);

export default store;