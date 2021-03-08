import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import StoreContext from "./StoreContext";


let rerenderEntireTree = (props) => {
    ReactDOM.render(
        <React.StrictMode>
            <StoreContext.Provider value={props}>
                <App

                    state={props.getState()}
                    dispatch={props.dispatch.bind(props)}
                    store={props}
                />
            </StoreContext.Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}


rerenderEntireTree(store);

//store.subscribe(rerenderEntireTree);
store.subscribe(() => {
    rerenderEntireTree(store);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
