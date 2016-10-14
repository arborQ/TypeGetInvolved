import loadUsers from './actions/loadUsers';
import loadUser from './actions/loadUser';
import destroyUser from './actions/destroyUser';

import store from './usersStore';

export var LoadUsers = loadUsers;
export var LoadUser = loadUser;
export var DestroyUser = destroyUser;
export var Store = store;
