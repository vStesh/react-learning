import {authAPI, usersAPI} from "../api/api";
import {toggleFollowingProgress, unfollowSuccess} from "./usersReducer";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_LOGIN = 'SET_LOGIN';
const SET_ERROR = 'SET_ERROR';

let initState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    errors: null,

}

const authReducer = (state = initState , action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };
        case SET_ERROR:
            return {
                ...state,
                ...action.payload,
            };

        default:
            return state;
    }
}

export const setAuthUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, payload: {id, email, login, isAuth}});
export const getAuthUserData = (userId) => (dispatch) => {
    return authAPI.me()
        .then(response => {
            if(response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
}
// export const setUserData1 = (login) =>{
//
//     return {type: SET_LOGIN, login: login};
// }
// export const setUserAC = (login) => ({type: SET_LOGIN, data: {login}});
// export const setUserData = (login) => (dispatch) => {
//
//         dispatch(setUserAC(login));
//
// }
export const setErrors = (errors) => (dispatch) => {
    dispatch({type: SET_ERROR, payload: {errors}});
}
export const logIn = (email, password, rememberMe) => (dispatch) => {

    authAPI.logIn(email, password, rememberMe, true)
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(getAuthUserData());
                dispatch(setErrors(false));

            } else {
                dispatch(setErrors(true));
            }
        });
}
export const logOut = (email, password, rememberMe) => (dispatch) => {

    authAPI.logOut(email, password, rememberMe)
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
}



export default authReducer;