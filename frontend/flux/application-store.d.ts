declare module __applicationStore {
    export var store: Redux.Store<store.IApplicationStore>;
    export var navigate: (path: string) => void;
}

declare module "application-store" {
    export = __applicationStore;
}

declare module __repositoryStore {
    export var UsersRepository: store.IUserStore;
    export var Router: store.IRouterStore;
}

declare module "repository-store" {
    export = __repositoryStore;
}

declare module store {
    interface IDefaultStore<T> {
        Store: (listener: (items: store.IRepositoryState<T>) => void) => Function;
    }

    interface IRouterStore {
        Navigate: (path: string, params?: any) => void;
    }

    interface IUserStore extends IDefaultStore<repository.users.IUser> {
        LoadUsers: () => void;
        LoadUser: (id: string) => void;
        UpdateUser: (userData: any) => Promise<string>;
        CreateUser: (userData: any) => Promise<string>;
        DestroyUser: (userId: string) => void;
    }

    interface IApplicationStore {
        CurrentUser: any,
        UsersRepository: IRepositoryState<repository.users.IUser>;
        Router : ReactRouterRedux.DefaultSelectLocationState;
    }

    interface IRepositoryState<T> {
        IsLoading: boolean;
        LastUpdate: Date;
        Items: T[];
    }
}