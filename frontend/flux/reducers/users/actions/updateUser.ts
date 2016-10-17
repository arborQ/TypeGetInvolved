import { store } from '../../../index';
import { update } from 'ajax';

export default (user: any): Promise<string> => {
  var promise = update('/Users', user)
    .then((userId) => { return userId; });
  
  const actionObject = {
    payload: promise,
    type: 'UPDATE_USER',
  };

  store.dispatch(actionObject);
  return promise;
};
