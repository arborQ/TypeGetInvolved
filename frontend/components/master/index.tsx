import * as React from 'react';
import { Layout } from 'ui';
import { store } from 'application-store';
export default class MasterPageComponent extends React.Component<{ children: any }, { IsAuthenticated : boolean }> {
    constructor(){
        super();
        this.state = { IsAuthenticated : false };
    }

    private unsubscribeStore : Function;

    public componentDidMount() : void {
        this.unsubscribeStore = store.subscribe(() => {
            var { userData } = store.getState();
            var { IsAuthenticated } = userData;
            this.setState(Object.assign({}, this.state, { IsAuthenticated }));
        });
        var { userData } = store.getState();
        var { IsAuthenticated } = userData;
        this.setState(Object.assign({}, this.state, { IsAuthenticated }));
        
    }

    public componentWillUnmount() : void {
        this.unsubscribeStore();
    }
    //authorize.logout
    public render(): React.ReactElement<{}> {
        
        var links : Array<ui.common.IApplicationLink> = [
            { Name: 'Home', Route: '/' }
        ];
        if(this.state.IsAuthenticated){
            links.push({ 
                Name: 'LogOut', 
                Route : '/LogOut', 
                OnClick : (e : React.MouseEvent) => {
                    e.stopPropagation();
                    e.preventDefault();
                    store.dispatch({ type : "authorize.logout" });
            } });
        }else{
            links.push({ Name: 'LogIn', Route: '/login' });
        }
        return (
            <div>
                <Layout Links={links} Title='ArborPage'>
                    <div>{this.props.children}</div>
                </Layout>
            </div>
        );
    }
}
