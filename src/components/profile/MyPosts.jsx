import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts() {
    const postData = [
        {id: 1, text: "Hi! How are you?", likesCount: 2},
        {id: 2, text: "Thank for learning...", likesCount: 12},
        {id: 3, text: "", likesCount: 0},
        {id: 4, text: "", likesCount: 0},
        {id: 5, text: "", likesCount: 0},
        {id: 6, text: "", likesCount: 0},
    ];
    return (
        <div className={style.posts}>
            <div className={style.title}>My posts</div>
            <div className={style.addPost}>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>

            </div>
            <Post message="Hi! How are you?" likesCount="2" />
            <Post message="Thank for learning..." likesCount="12" />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>

    );
}

export default MyPosts;