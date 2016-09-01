import * as React from 'react';
import { Layout } from 'ui';

export default class MasterPageComponent extends React.Component<{ children: any }, { /* state */ }> {
    public render(): React.ReactElement<{}> {
        return (
            <div>
                <Layout />
                <div>{this.props.children}</div>
            </div>
        );
    }
}
