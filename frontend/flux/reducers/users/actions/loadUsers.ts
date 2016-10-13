import { store } from '../../../index';
import { get } from 'ajax';

export default (): void => {
  const actionObject = {
    payload : get('/users'),
    type: 'LOAD_USERS',
  };

  store.dispatch(actionObject);
};

// get('/users', {}).then((data) => {
        //     this.UpdateState({ UserList: [...data] });
        // });
