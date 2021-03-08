const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initState = {
    dialogs :
        [
            {id: 1, name: 'Dima'},
            {id: 2, name: 'Oleg'},
            {id: 3, name: 'John'},
            {id: 4, name: 'Vova'},
            {id: 5, name: 'Katya'},
            {id: 6, name: 'Vasya'},
        ],
    messages:
        [
            {id: 1, user: 1, text: 'Hello!'},
            {id: 2, user: 1, text: 'How are you?'},
            {id: 3, user: 1, text: 'Hi'},
            {id: 4, user: 1, text: 'By'},
            {id: 5, user: 2, text: 'Go'},
            {id: 6, user: 2, text: 'Run'},
            {id: 7, user: 3, text: 'Thank you'},
            {id: 8, user: 3, text: 'Again'},
            {id: 9, user: 4, text: 'Hello!'},
            {id: 10, user: 5, text: 'Hi'},
            {id: 11, user: 5, text: 'Giv me please'},
        ],
    newMessageBody: '',
}

export const dialogReducer = (state = initState, action) => {
    let stateCopy ;
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMessageBody: action.text
            };
        }
        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [ ...state.messages, {id: 6, user: 2, text: body} ]
            };
        }
        default:
            return state;
    }
}
export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (text) => ({type: UPDATE_NEW_MESSAGE_BODY, text: text});

export default dialogReducer;