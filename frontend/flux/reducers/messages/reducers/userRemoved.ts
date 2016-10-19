let reducer: store.messages.MessageReducer =  (state: any, action: any): any => {
    if (action.type === 'DESTROY_USER_FULFILLED') {
        return Object.assign({}, state, {
            Messages: [...state.Messages, <store.messages.IMessage>{ Date: new Date(), Text: 'New user removed!' }]
        });
    }
    return state;
};

export default reducer;
