import getDefaultState from './defaultState';

var defaultState = getDefaultState();

function deleteCookie( name : string ) : void {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

export default (state: flux.reducers.authorize.IState = defaultState, action: any): any => {
    switch (action.type) {
        case 'authorize.success':
            return Object.assign({}, state, { Expire: new Date(), IsAuthenticated: true, UserName: 'arbor' });
        case 'authorize.logout':
            deleteCookie('jwt-token');
            return Object.assign({}, state, { Expire: new Date(), IsAuthenticated: false, UserName: null })
        default:
            return state;
    }
}
