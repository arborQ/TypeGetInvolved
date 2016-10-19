import loadUsers from './actions/loadUsers';
import loadUser from './actions/loadUser';
import destroyUser from './actions/destroyUser';
import createUser from './actions/createUser';
import updateUser from './actions/updateUser';

import store from './usersStore';

export var LoadUsers = loadUsers;
export var LoadUser = loadUser;
export var DestroyUser = destroyUser;
export var CreateUser = createUser;
export var UpdateUser = updateUser;
export var Store = store;
