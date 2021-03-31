import React from 'react';
import style from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPostsContainer";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

function Profile(props) {

    return (
        <div className="content">
            <ProfileInfo profile={props.profile}/>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            <div className={style.avatar}>{props.auth.login}</div>
            <MyPostsContainer />
        </div>
    );
}

export default Profile;
