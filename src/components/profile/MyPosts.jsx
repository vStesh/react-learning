import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props) {
    let postsElements = props.profilePage.posts.map(e => <Post id={e.id} message={e.text} likesCount={e.likesCount} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    };
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNepPostText(text);
    }
    return (
        <div className={style.posts}>
            <div className={style.title}>My posts</div>
            <div className={style.addPost}>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.profilePage.newPostText} />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>

            </div>
            {postsElements}
        </div>

    );
}

export default MyPosts;