import React from 'react';
import style from "../Profile.module.css";
import Preloader from "../../Preloader";

function ProfileInfo (props) {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <>
            <div className={style.header_img}>
                <img className={style.img_content} src="./../../coding-language.jpg" alt="" />
            </div>
            <div>
                <img src={props.profile?.photos.large}/>
            </div>
        </>

    );
}

export default ProfileInfo;