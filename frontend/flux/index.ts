import { createStore, combineReducers } from 'redux';
import userData from './reducers/authorize/reducer';
let reudcers = combineReducers({ userData });

export var store = createStore(reudcers);
