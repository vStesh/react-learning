import React from 'react';
import style from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPostsContainer";

function Profile(props) {
    return (
        <div className="content">
            <ProfileInfo />
            <div className={style.avatar}>Avatar +</div>
            <MyPostsContainer
                // profilePage={props.state}
                // dispatch={props.dispatch}
                //store={props.store}
            />
        </div>
    );
}

export default Profile;
