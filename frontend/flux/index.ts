import { createStore, combineReducers } from 'redux';
import userData from './reducers/authorize/reducer'
var reudcers = combineReducers({ userData });

export var store = createStore(reudcers);
