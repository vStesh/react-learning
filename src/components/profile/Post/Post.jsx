import React from 'react';
import style from './Post.module.css';
import img from './../../../img/no-avatar.png';

function Post(props) {
    return (
        <div className={style.item}>
            
            <img className={style.img} src={img} alt="" />
            {props.message}
            {props.likesCount}

        </div>

    );
}

export default Post; 