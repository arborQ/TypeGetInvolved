import { store } from '../../../index';

export default (): void => {
  const actionObject = {
    payload: new Promise<repository.users.IUser[]>((resolve, reject) => {
      setTimeout(() => {
        resolve(<repository.users.IUser[]>[
          { firstName: 'Lukasz', id: 1, lastName: 'Wojcik', login: 'arbor' },
        ]);
      }, 1000);
    }),
    type: 'LOAD_USERS',
  };

  store.dispatch(actionObject);
};
