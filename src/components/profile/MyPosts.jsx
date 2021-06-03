import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = React.memo (props => {
    let postsElements = props.posts.map(e => <Post id={e.id} message={e.text} likesCount={e.likesCount}/>);
console.log("Render");
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
        //props.dispatch(addPostActionCreator());
    };
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
        // props.dispatch(updateNewPostTextActionCreator(text));
    }
    return (
        <div className={style.posts}>
            <div className={style.title}>My posts</div>
            <div className={style.addPost}>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>

            </div>
            {postsElements}
        </div>

    )
});

export default MyPosts;