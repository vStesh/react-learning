const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initState = {
    posts : [
        {id: 1, text: "Hi! How are you?", likesCount: 2},
        {id: 2, text: "Thank for learning...", likesCount: 12},
        {id: 3, text: "", likesCount: 0},
        {id: 4, text: "", likesCount: 0},
        {id: 5, text: "", likesCount: 0},
        {id: 6, text: "", likesCount: 0},
    ],
    newPostText: 'fdfd',
    profile: null,
}

const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                text: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            };;
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.text
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        text: text
    }
}

export default profileReducer;