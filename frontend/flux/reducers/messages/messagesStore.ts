import { store } from '../../index';


export default (listener: (items: store.messages.IMessagesState) => void) : Function => {
    return store.subscribe(() => {
        console.log('XXXXXX', store.getState());
        let { Messages } = store.getState();
        listener(Messages);
    });
};
