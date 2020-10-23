import React from 'react';
import store from './redux/state';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App 
                state={state} 
                dispatch={store.dispatch.bind(store)} />
                {/* addPost={store.addPost.bind(store)} 
                updateNewPostText={store.updateNewPostText.bind(store)} 
                addMessage={store.addMessage.bind(store)} 
                updateNewMessageList={store.updateNewMessageList.bind(store)} /> */}
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
