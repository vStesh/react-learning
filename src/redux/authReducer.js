import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,

}

const authReducer = (state = initState , action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            };

        default:
            return state;
    }
}

export const setAuthUserData = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}});
export const getAuthUserData = (userId) => (dispath) => {
    authAPI.me()
        .then(response => {
            if(response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                dispath(setAuthUserData(id, email, login));
            }
        });
}


export default authReducer;