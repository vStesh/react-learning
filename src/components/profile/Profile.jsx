import React from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function TProfile() {
    return (
        <div className="content">

            <ProfileInfo />
            <div className={style.avatar}>Avatar +</div>
            <MyPosts />
            
        </div>
    );
}

export default TProfile;
