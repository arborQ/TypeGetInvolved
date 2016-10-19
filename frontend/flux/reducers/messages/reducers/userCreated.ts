let reducer: store.messages.MessageReducer =  (state: any, action: any): any => {
    if (action.type === 'CREATE_USER_FULFILLED') {
        alert('in');
        return Object.assign({}, state, { Messages: [...this.state, { date: new Date(), text: 'New user added!' }] });
    }
    return state;
};

export default reducer;
