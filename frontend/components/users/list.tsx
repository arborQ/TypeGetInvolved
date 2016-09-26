import * as React from 'react';
import { Input, Panel, Button, Form, Grid } from 'ui';
import { post, get } from 'ajax';
import { StoreComponent } from 'shared';

export default class UserListPageComponent extends StoreComponent<pages.users.list.IProps, pages.users.list.IState> {
    public componentDidMount(): void {
        get('api/users', {}).then(data => {

        });
    } 
    public render(): any {
        let columns: ui.grid.IGridColumn[] = [
            { Field: 'userName', Name: 'Name' },
            { Field: 'email', Name: 'Email' },
        ];

        let action = [
            <Button Text='Add' key='add' OnClick={() => { this.props.history.push('/Users/Add'); }}  />,
            <Button Text='Edit' key='edit' OnClick={() => { this.props.history.push('/Users/Details/1'); }}  />,
        ];

        return (
            <div style={{ 'width': '90%', 'maxWidth': '800px', 'margin': '0 auto' }}>
                <Grid Columns={columns} Data={[
                    { email: 'arbor@o2.pl', userName: 'arbor' },
                    { email: 'arbor@o2.pl', id: 1, userName: 'arbor' },
                    ]} Actions={action} />
                {this.props.children}
            </div>
        );
    }
}
