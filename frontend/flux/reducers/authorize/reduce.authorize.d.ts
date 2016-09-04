declare module flux.reducers.authorize {
    interface IState {
        Expire: Date;
        IsAuthenticated : boolean;
        UserName : string;
    }
}
