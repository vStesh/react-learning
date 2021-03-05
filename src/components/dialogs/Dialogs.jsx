import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map((dialog) => {
        return (
            <DialogItem name={dialog.name} id={dialog.id} />
        );
    });
    let messagesElements = props.state.messages.map(message => <Message id={message.id} user={message.user} text={message.text} />)

    return (
      <div className={style.content}>
          <div className={style.dialogs}>
              { dialogsElements }
          </div>
          <div className={style.messages}>
              {messagesElements}
          </div>
      </div>
    );
}

export default Dialogs;