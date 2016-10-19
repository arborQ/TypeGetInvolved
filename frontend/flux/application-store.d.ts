declare module __applicationStore {
    export var store: Redux.Store<store.IApplicationStore>;
    export var navigate: (path: string) => void;
}

declare module "application-store" {
    export = __applicationStore;
}

declare module __repositoryStore {
    export var UsersRepository: store.IUserStore;
    export var Messages: store.IMessageStore;
    export var Router: store.IRouterStore;
}

declare module "repository-store" {
    export = __repositoryStore;
}

declare module store {

    type ComponentStore<T> = (listener: (model : T) => void) => Function;

    interface IDefaultStore<T> {
        Store: ComponentStore<store.IRepositoryState<T>>;
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

    interface IMessageStore {
        AddMessage: Redux.Reducer;
        Store: ComponentStore<store.messages.IMessagesState>;
    }

    interface IApplicationStore {
        CurrentUser: any,
        UsersRepository: IRepositoryState<repository.users.IUser>;
        Messages: store.messages.IMessagesState;
        Router : ReactRouterRedux.DefaultSelectLocationState;
    }

    interface IRepositoryState<T> {
        IsLoading: boolean;
        LastUpdate: Date;
        Items: T[];
    }
}