import * as React from 'react';
import { Layout } from 'ui';

export default class MasterPageComponent extends React.Component<{ children: any }, { /* state */ }> {
    public render(): React.ReactElement<{}> {
        var links = [
            { Name: 'Home', Route: '/' },
            { Name: 'Login', Route: '/login' }
        ];
        return (
            <div>
                <Layout Links={links}>
                    <div>{this.props.children}</div>
                </Layout>
            </div>
        );
    }
}
