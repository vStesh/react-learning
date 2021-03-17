import React from 'react';
import style from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPostsContainer";

function Profile(props) {
    return (
        <div className="content">
            <ProfileInfo profile={props.profile}/>
            <div className={style.avatar}>Avatar +</div>
            <MyPostsContainer />
        </div>
    );
}

export default Profile;
