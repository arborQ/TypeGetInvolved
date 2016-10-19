let reducer: store.messages.MessageReducer =  (state: any, action: any): any => {
    if (action.type === 'CREATE_USER_FULFILLED') {
        return Object.assign({}, state, { Messages: [...this.state, { date: new Date(), text: 'New user added' }] });
    }
};

export default reducer;
