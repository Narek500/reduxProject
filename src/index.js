import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

let initialState = [
    { id: Date.now().toString() + 1, name: 'Item 1', status: false },
    { id: Date.now().toString() + 2, name: 'Item 2', status: false },
    { id: Date.now().toString() + 3, name: 'Item 3', status: false },
    { id: Date.now().toString() + 4, name: 'Item for search', status: false },
]

function rootReducer(state = initialState, action) {

    if (action.type === 'CHANGE_STATUS') {

        let new12 = state.findIndex((obj => obj.id === action.payload));

        if (state[new12].status) {
            state[new12].status = false;
        } else {
            state[new12].status = true;
        }


        return [...state];

    } else if (action.type === 'DELETE_ROW') {

        let del = state.filter((e) => {
            if (action.payload[1]) {
                return e.name !== action.payload[0];
            } else {
                return state;
            }
        })
        else if(action.type==='add item'){
          return[...state, action.payload]
        }
        else if(action.type==='add id'){
           return[...state, action.payload]
         }

        return del;

    }

}

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
