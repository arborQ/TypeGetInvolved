import { syncHistoryWithStore, routerReducer, routerMiddleware, push, replace } from 'react-router-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

import CurrentUser from './reducers/authorize/reducer';
import UsersRepository from './reducers/users/usersReducer';
import Messages from './reducers/messages/reducers';

const middleware = routerMiddleware(browserHistory);

let reudcers = combineReducers({
  CurrentUser,
  UsersRepository,
  Messages,
  routing: routerReducer,
});

const logger = store => next => action => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  return result;
};

export var store = createStore<store.IApplicationStore>(reudcers, applyMiddleware(middleware, thunk, promiseMiddleware(), logger));

export var navigate = (path: string): void => {
    store.dispatch(replace(path));
};
