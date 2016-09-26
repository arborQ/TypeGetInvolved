declare module pages.users.list{
    interface IState{

    }

    interface IProps extends ReactRouter.RouteComponentProps<any, any>{

    }
}

declare module pages.users.details{
    interface IProps extends ReactRouter.RouteComponentProps<any, any>{

    }

    interface IState{
        email: string;
        login: string;
        firstName: string;
        lastName: string;
    }
}