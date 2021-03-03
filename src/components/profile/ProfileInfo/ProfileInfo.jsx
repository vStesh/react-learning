import React from 'react';
import style from "../Profile.module.css";

function ProfileInfo () {
    return (
        <div className={style.header_img}>
            <img className={style.img_content} src="./../../coding-language.jpg" alt="" />

        </div>
    );
}

export default ProfileInfo;