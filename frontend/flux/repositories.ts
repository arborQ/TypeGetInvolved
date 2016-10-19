import * as usersRepository from './reducers/users';
import * as messages from './reducers/messages';

import { store } from './index';
import { push, replace } from 'react-router-redux';

export var UsersRepository = usersRepository;

export var Router: store.IRouterStore = {
    Navigate: (path: string, params?: any): void => {
        store.dispatch(push(path));
    },
};
export var Messages = messages;
