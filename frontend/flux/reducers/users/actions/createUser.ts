import { store } from '../../../index';
import { post } from 'ajax';

export default (user: any): Promise<string> => {
  var promise = post('/Users', user)
    .then((userId) => { return userId; });
  
  const actionObject = {
    payload: promise,
    type: 'CREATE_USER',
  };

  store.dispatch(actionObject);
  return promise;
};
