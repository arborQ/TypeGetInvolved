import { store } from '../../../index';

export default (text: string): void => {
  const actionObject = {
    text,
    type: 'ADD_MESSAGE',
  };

  store.dispatch(actionObject);
};
