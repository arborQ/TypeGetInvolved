import userCreated from './userCreated';
import userRemoved from './userRemoved';


let defaultState: store.messages.IMessagesState = {
    Messages : [],
};

let reducers = [
        userCreated,
        userRemoved,
    ];

let reducer: store.messages.MessageReducer
    = (state: store.messages.IMessagesState = defaultState, action: ReactRouterRedux.RouterAction): store.messages.IMessagesState => {
        let resultState = Object.assign({}, state);
        reducers.forEach(element => {
            resultState = element(resultState, action);
        });
        return resultState;
};

export default reducer;
