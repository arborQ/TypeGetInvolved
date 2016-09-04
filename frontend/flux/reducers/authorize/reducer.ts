var defaultState = <flux.reducers.authorize.IState>{
    Expire: null,
    IsAuthenticated: false,
    UserName: null
};
export default (state: flux.reducers.authorize.IState = defaultState, action: any): any => {
    switch (action.type) {
        case 'authorize.success':
            return Object.assign({}, state, { Expire: new Date(), IsAuthenticated: true, UserName: 'arbor' });
        default:
            return state;
    }
}
