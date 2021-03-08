const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
}

const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                text: state.newPostText,
                likesCount: 0
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
        text: text
    }
}

export default profileReducer;