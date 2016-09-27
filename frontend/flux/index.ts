import { createStore, combineReducers } from 'redux';
import userData from './reducers/authorize/reducer';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
let reudcers = combineReducers({ userData, routing: routerReducer });

export var store = createStore(reudcers);
