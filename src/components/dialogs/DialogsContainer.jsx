import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }
    return (
        <Dialogs
        dialogsPage={props.store.getState().dialogsPage}
        dispatch={props.store.dispatch}
        updateNewMessageBody={onNewMessageChange}
        sendMessage={onSendMessageClick}
        />
    );
}

export default DialogsContainer;