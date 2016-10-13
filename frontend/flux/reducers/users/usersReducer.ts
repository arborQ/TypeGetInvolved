let defaultState = {
    IsLoading : false,
    UpdateTime: null,
    Users: [],
};
let routerActionType = '@@router/LOCATION_CHANGE';

export default (state = defaultState, action: any): any => {
    if (action.type === 'LOAD_USERS') {
            return Object.assign({}, state, { IsLoading : true });
    }
    return state;
};
