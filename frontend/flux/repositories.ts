import * as usersRepository from './reducers/users';
import { store } from './index';
import { push, replace } from 'react-router-redux';

export var UsersRepository = usersRepository;

export var Router: store.IRouterStore = {
    Navigate: (path: string, params?: any): void => {
        store.dispatch(push(path));
    },
};
