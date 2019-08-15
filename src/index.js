import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';

let initialState = [
    {id: Date.now().toString()+1, name: 'Item 1', status: false},
    {id: Date.now().toString()+2, name: 'Item 2', status: false},
    {id: Date.now().toString()+3, name: 'Item 3', status: false},
]


function rootReducer (state = initialState, action) {

    if (action.type === 'CHANGE_STATUS') {
        console.log(action.payload);
        return action.payload;
    } else if (action.type==='delete row') {
        return state.filter(e=>e.name!==action.payload)
    }

    return state;
}

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
