import * as React from 'react';
import { Layout } from 'ui';
import { store } from 'application-store';
export default class MasterPageComponent extends React.Component<{ children: any }, { IsAuthenticated: boolean }> {
    private unsubscribeStore: Function;
    constructor() {
        super();
        this.state = { IsAuthenticated : false };
    }

    public componentDidMount(): void {
        this.unsubscribeStore = store.subscribe(() => {
            let { userData } = store.getState();
            let { IsAuthenticated } = userData;
            this.setState(Object.assign({}, this.state, { IsAuthenticated }));
        });
        let { userData } = store.getState();
        let { IsAuthenticated } = userData;
        this.setState(Object.assign({}, this.state, { IsAuthenticated }));
    }

    public componentWillUnmount(): void {
        this.unsubscribeStore();
    }

    public render(): React.ReactElement<{}> {
        let links: Array<ui.common.IApplicationLink> = [
            { Name: 'Home', Route: '/' },
        ];
        if (this.state.IsAuthenticated) {
            links.push(
                {
                    Name: 'Users',
                    Route : '/Users',
                },
                {
                    Name: 'LogOut',
                    OnClick : (e: React.MouseEvent) => {
                        e.stopPropagation();
                        e.preventDefault();
                        store.dispatch({ type : 'authorize.logout' });
                    },
                    Route : '/LogOut',
                }
                );
        } else {
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
