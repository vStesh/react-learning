import profileReducer, {addPostActionCreator} from "./profileReducer";

// 1. test data
let initState = {
    posts : [
        {id: 1, text: "Hi! How are you?", likesCount: 2},
        {id: 2, text: "Thank for learning...", likesCount: 12},
    ],
    newPostText: 'New post text',
}

// 2. action
let newState = profileReducer(initState, action);

test('length of posts should be encremented', () => {

    let action = addPostActionCreator();
    // 3. expectation
    expect(newState.posts.length).toBe(3);

});

test('text of new test should be correct', () => {

    let action = addPostActionCreator();
    // 3. expectation
    expect(newState.posts[2].text).toBe("New post text");

});

test('after deleting length of messages should be decrement', () => {

    let action = addPostActionCreator();
    // 3. expectation
    expect(newState.posts[2].text).toBe("New post text");

});
