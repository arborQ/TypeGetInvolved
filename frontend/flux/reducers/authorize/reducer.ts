import getDefaultState from './defaultState';
import { deleteCookie } from './cookies';

let defaultState: flux.reducers.authorize.IState = getDefaultState();

export default (state: flux.reducers.authorize.IState = defaultState, action: any): any => {
    switch (action.type) {
        case 'authorize.success':
            return Object.assign({}, state, { Expire: new Date(), IsAuthenticated: true, UserName: 'arbor' });
        case 'authorize.logout':
            deleteCookie('jwt-token');
            return Object.assign({}, state, getDefaultState());
        default:
            return state;
    }
};
