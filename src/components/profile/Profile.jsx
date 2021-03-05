import React from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
    return (
        <div className="content">
            <ProfileInfo />
            <div className={style.avatar}>Avatar +</div>
            <MyPosts
                profilePage={props.state}
                addPost={props.addPost}
                updateNepPostText={props.updateNewPostText}
            />
        </div>
    );
}

export default Profile;
