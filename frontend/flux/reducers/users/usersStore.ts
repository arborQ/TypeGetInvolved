import { store } from '../../store';

export default (listener: (items: any) => void) => {
    return store.subscribe(() => {
        let { UsersRepository } = store.getState();
        listener(UsersRepository);
    });
};
