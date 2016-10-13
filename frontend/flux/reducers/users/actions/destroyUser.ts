import { store } from '../../../index';

export default (userId: string): void => {
  const actionObject = {
    payload: new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        resolve(false);
      }, 2000);
    }),
    type: 'DESTROY_USER',
  };

  store.dispatch(actionObject);
};
// destroy(`api/users`, { _id: firstItem.id });
