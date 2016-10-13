import { store } from '../../../index';
import { destroy } from 'ajax';

export default (userId: string): void => {
  const actionObject = {
    payload: destroy('/Users', { _id : userId }).then(() => { return userId; }),
    type: 'DESTROY_USER',
  };

  store.dispatch(actionObject);
};
// destroy(`api/users`, { _id: firstItem.id });
