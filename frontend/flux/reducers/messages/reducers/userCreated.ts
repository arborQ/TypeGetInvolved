let reducer: store.messages.MessageReducer =  (state: any, action: any): any => {
    if (action.type === 'CREATE_USER_FULFILLED') {
        return Object.assign({}, state, {
            Messages: [...state.Messages, <store.messages.IMessage>{ Date: new Date(), Text: 'New user added!' }]
        });
    }
    return state;
};

export default reducer;
