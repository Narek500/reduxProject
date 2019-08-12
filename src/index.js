import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';

const initialState = [
    {id: Date.now().toString(), name: 'Item 1', status: false},
    {id: Date.now().toString(), name: 'Item 2', status: false},
    {id: Date.now().toString(), name: 'Item 3', status: false},
]

function rootReducer (state = initialState) {
    return state;
}

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
