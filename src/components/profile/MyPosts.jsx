import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts() {
    return (
        <div>
            <div className={style.title}>My posts</div>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post message="Hi! How are you?" />
            <Post message="Thank for learning..." />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>

    );
}

export default MyPosts;