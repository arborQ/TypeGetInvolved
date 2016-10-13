let defaultState = <store.IRepositoryState<repository.users.IUser>> {
    IsLoading: false,
    Items: [],
    LastUpdate: null,
};
let routerActionType = '@@router/LOCATION_CHANGE';

export default (state = defaultState, action: any): any => {
    if (action.type === 'LOAD_USERS_FULFILLED') {
            return Object.assign({}, state, { IsLoading: false, Items: [ ...action.payload ], LastUpdate: new Date() } );
    }
    if (action.type === 'LOAD_USERS_PENDING') {
            return Object.assign({}, state, { IsLoading: true } );
    }

    if (action.type === 'DESTROY_USER_FULFILLED') {
            return Object.assign({}, 
            state,
            {
                Items: [ ...state.Items.filter(i => i.id !== action.payload) ], LastUpdate: new Date(),
            } );
    }
    return state;
};
