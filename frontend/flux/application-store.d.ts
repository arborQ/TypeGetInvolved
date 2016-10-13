declare module __applicationStore {
    export var store: Redux.Store<store.IApplicationStore>;
    export var navigate: (path: string) => void;
}

declare module "application-store" {
    export = __applicationStore;
}


declare module store {

    interface IApplicationStore {
        CurrentUser: any,
        UsersRepository: IRepository<repository.users.IUser>;
        Router : ReactRouterRedux.DefaultSelectLocationState;
    }

    interface IRepository<T> {
        IsLoading: boolean;
        LastUpdate: Date;
        Items: T[];
    }
}