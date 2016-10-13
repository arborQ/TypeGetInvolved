import { store } from '../../index';

export default (listener: (items: store.IRepositoryState<repository.users.IUser>) => void) : Function => {
    return store.subscribe(() => {
        let { UsersRepository } = store.getState();
        listener(UsersRepository);
    });
};
