let defaultState = {
    IsLoading : false,
    UpdateTime: null,
    Users: [],
};
let routerActionType = '@@router/LOCATION_CHANGE';

export default (state = defaultState, action: any): any => {
    if (action.type === routerActionType && action.payload.pathname === '/Users') {
            return Object.assign({}, state, { IsLoading : true });
    }
    return state;
};
