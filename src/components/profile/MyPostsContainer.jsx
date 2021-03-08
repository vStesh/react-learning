import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../StoreContext";

function MyPostsContainer(props) {

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };
    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    }
    return (
        <StoreContext.Consumer> {
            (store) => (
            <MyPosts
                updateNewPostText={onPostChange}
                addPost={addPost}
                posts={props.store.getState().profilePage.posts}
                newPostText={props.store.getState().profilePage.newPostText}
            />
            )
        }
        </StoreContext.Consumer>
    );
}

export default MyPostsContainer;