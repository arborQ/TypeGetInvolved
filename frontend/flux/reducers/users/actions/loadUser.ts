// LoadUser: (id: string) => void;
//         UpdateUser: () => Promise<string>;
import { store } from '../../../index';
import { get } from 'ajax';

export default (id: string): void => {
    const actionObject = {
        payload : get('/users', { _id: id }),
        type: 'LOAD_USERS',
    };

    store.dispatch(actionObject);
};