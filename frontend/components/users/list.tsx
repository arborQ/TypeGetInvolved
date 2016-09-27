import * as React from 'react';
import { Input, Panel, Button, Form, Grid } from 'ui';
import { post, get } from 'ajax';
import { DefaultComponent } from 'shared';

export default class UserListPageComponent extends DefaultComponent<pages.users.list.IProps, pages.users.list.IState> {
    constructor() {
        super();
        this.state = { UserList : [] };
    }

    public componentDidMount(): void {
        super.componentDidMount();
        get('api/users', {}).then((data) => {
            this.UpdateState({ UserList: [...data] });
        });
    };

    public render(): any {
        let columns: ui.grid.IGridColumn[] = [
            { Field: 'firstName', Name: 'FirstName' },
            { Field: 'lastName', Name: 'LastName' },
            { Field: 'login', Name: 'Login' },
            { Field: 'email', Name: 'Email' },
        ];

        let action = [
            <Button Text='Add' key='add' OnClick={() => { this.props.history.push('/Users/Add'); }}  />,
            <Button Text='Edit' key='edit' OnClick={() => { this.props.history.push('/Users/Details/1'); }}  />,
        ];
        let { UserList } = this.state;
        return (
            <div style={{ 'width': '90%', 'maxWidth': '800px', 'margin': '0 auto' }}>
                <Grid Columns={columns} Data={UserList} Actions={action} />
                {this.props.children}
            </div>
        );
    }
}
