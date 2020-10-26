import { createStore, combineReducers } from "redux";
import ProfileReducer from "./ProfileReducer";
import DialogsReducer from "./DialogsReducer";
import NavbarReducer from "./NavbarReducer";

let reducers = combineReducers({
    navbar: NavbarReducer,
    profile: ProfileReducer,
    dialogs: DialogsReducer,
});


let store = createStore(reducers);

debugger;

export default store;