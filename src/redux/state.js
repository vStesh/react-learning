let store = {
    _state: {
        profilePage: {
            posts : [
                {id: 1, text: "Hi! How are you?", likesCount: 2},
                {id: 2, text: "Thank for learning...", likesCount: 12},
                {id: 3, text: "", likesCount: 0},
                {id: 4, text: "", likesCount: 0},
                {id: 5, text: "", likesCount: 0},
                {id: 6, text: "", likesCount: 0},
            ],
            newPostText: 'fdfd',
        },
        messagePage: {
            dialogs :
                [
                    {id: 1, name: 'Dima'},
                    {id: 2, name: 'Oleg'},
                    {id: 3, name: 'John'},
                    {id: 4, name: 'Vova'},
                    {id: 5, name: 'Katya'},
                    {id: 6, name: 'Vasya'},
                ],
            messages:
                [
                    {id: 1, user: 1, text: 'Hello!'},
                    {id: 2, user: 1, text: 'How are you?'},
                    {id: 3, user: 1, text: 'Hi'},
                    {id: 4, user: 1, text: 'By'},
                    {id: 5, user: 2, text: 'Go'},
                    {id: 6, user: 2, text: 'Run'},
                    {id: 7, user: 3, text: 'Thank you'},
                    {id: 8, user: 3, text: 'Again'},
                    {id: 9, user: 4, text: 'Hello!'},
                    {id: 10, user: 5, text: 'Hi'},
                    {id: 11, user: 5, text: 'Giv me please'},
                ],
        },

    },
    _rerenderEntireTree() {

        console.log('State changed');
    },
    getState() {

      return this._state;
    },
    addPost() {
        let newPost = {
            id: 5,
            text: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost);
        this.updateNewPostText("");
        this._rerenderEntireTree(this.getState());
    },
    updateNewPostText(newText){
        this._state.profilePage.newPostText = newText;
        this._rerenderEntireTree(this.getState());
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    }

}

export default store;
window.store = store;