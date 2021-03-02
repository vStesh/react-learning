import React from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPosts';

function TProfile() {
    return (
        <div className="content">
            <div className={style.header_img}>
                <img className={style.img_content} src="./../coding-language.jpg" alt="" />
            </div>
        
            <div>Avatar +</div>
            <MyPosts />
            
        </div>
    );
}

export default TProfile;
    