declare module pages.users.list{
    interface IState{
        UserList: pages.users.details.IUser[],
        SelectedUsers: string[]
    }

    interface IProps extends ReactRouter.RouteComponentProps<any, any>{

    }
}

declare module pages.users.details{
    interface IProps extends ReactRouter.RouteComponentProps<any, any>{

    }
    interface IUser {
        id: string;
        email: string;
        login: string;
        firstName: string;
        lastName: string;
    }
    interface IState{
        UserData: IUser;
    }
}