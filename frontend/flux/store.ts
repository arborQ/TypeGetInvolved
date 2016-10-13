import { syncHistoryWithStore, routerReducer, routerMiddleware, push, replace } from 'react-router-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';

import CurrentUser from './reducers/authorize/reducer';
import UsersRepository from './reducers/users/usersReducer';

const middleware = routerMiddleware(browserHistory);

let reudcers = combineReducers({
  CurrentUser,
  UsersRepository,
  Router: routerReducer,
});

const logger = store => next => action => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  return result;
};

export var store = createStore<store.IApplicationStore>(reudcers, applyMiddleware(middleware, logger));

export var navigate = (path: string): void => {
    store.dispatch(replace(path));
};
