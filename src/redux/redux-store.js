import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    usersPage: usersReducer,
    auth: authReducer,

});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;