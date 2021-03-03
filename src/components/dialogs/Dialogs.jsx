import React from 'react';
import style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={style.item + ' ' + style.itemActive}>
            <NavLink to={"/messages/" + props.id}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={style.message}>{props.text}</div>
    );
}
const Dialogs = (props) => {

    const dialogsData = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Oleg'},
        {id: 3, name: 'John'},
        {id: 4, name: 'Vova'},
        {id: 5, name: 'Katya'},
        {id: 6, name: 'Vasya'},
    ];

    const messagesData = [
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
    ];

    return (
      <div className={style.content}>
          <div className={style.dialogs}>
            <DialogItem name="Dima" id="1"/>
            <DialogItem name="Vasy" id="2"/>
            <DialogItem name="Katya" id="3"/>
            <DialogItem name="Oleg" id="4"/>
            <DialogItem name="John" id="5"/>

          </div>
          <div className={style.messages}>
              <Message text="Hi!"/>
              <Message text="How are yuo?"/>
              <Message text="Hello!!"/>
              <Message text="By!"/>
          </div>
      </div>
    );
}

export default Dialogs;