import React from 'react';
import {Redirect} from 'react-router-dom';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map((dialog) => {
        return (
            <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>
        );
    });
    let messagesElements = props.dialogsPage.messages.map(message => <Message id={message.id} key={message.id} user={message.user} text={message.text} />)
    let newMessageBody = props.dialogsPage.newMessageBody;
    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }
    // if(!props.isAuth) {
    //     return <Redirect to={"/login"} />
    // }
    return (
      <div className={style.content}>
          <div className={style.dialogs}>
              { dialogsElements }
          </div>
          <div className={style.messages}>
            <div>
                {messagesElements}
            </div>
              <div>
                 <div><textarea
                     onChange={ onNewMessageChange }
                     value={ newMessageBody } cols="60" rows="3"
                     placeholder="Input your message" /></div>
                 <div><button onClick={ onSendMessageClick }>Send Message</button></div>
              </div>
          </div>
      </div>
    );
}

export default Dialogs;