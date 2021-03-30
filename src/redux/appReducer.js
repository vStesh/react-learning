import {authAPI, usersAPI} from "../api/api";
import {getAuthUserData} from "./authReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


let initState = {
    initialized: false,
}

const appReducer = (state = initState , action) => {

    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            };

        default:
            return state;
    }
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});
export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    debugger;

    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        });
}



export default appReducer;