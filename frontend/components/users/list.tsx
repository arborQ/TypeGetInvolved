import * as React from 'react';
import { Input, Panel, Button, Form, Grid } from 'ui';
import { UsersRepository } from 'repository-store';
import { DefaultComponent } from 'shared';
console.log(UsersRepository);
export default class UserListPageComponent extends DefaultComponent<pages.users.list.IProps, pages.users.list.IState> {
    private unwatchStore: Function;

    constructor() {
        super();
        this.state = { SelectedUsers : [], UserList : [] };
    }

    public componentWillReceiveProps (next: pages.users.list.IProps) {
        UsersRepository.LoadUsers();
    }
    public componentWillUnmount(): void {
        this.unwatchStore();
    }
    public componentDidMount(): void {
        super.componentDidMount();
        this.unwatchStore = UsersRepository.Store((data) => {
            console.log(data);
        });
        this.componentWillReceiveProps(this.props);
    };

    public render(): any {
        let columns: ui.grid.IGridColumn[] = [
            { Field: 'firstName', Name: 'FirstName' },
            { Field: 'lastName', Name: 'LastName' },
            { Field: 'login', Name: 'Login' },
            { Field: 'email', Name: 'Email' },
        ];

        let actions = [
            <Button Text='Add' key='add' OnClick={() => { this.props.history.push('/Users/Add'); }}  />,
        ];

        if (this.state.SelectedUsers.length) {
            let isDisabled = this.state.SelectedUsers.length > 1;
            let [ firstItem ] = this.state.SelectedUsers;
            actions = [...actions, <Button
                                    Disabled={isDisabled}
                                    Text='Edit'
                                    key='edit'
                                    OnClick={() => { this.props.history.push(`/Users/Details/${firstItem.id}`); }}  />];
            actions = [...actions, <Button
                                    Disabled={isDisabled}
                                    Text='Delete'
                                    key='delete'
                                    OnClick={() => { UsersRepository.DestroyUser(firstItem.id); }}  />];
        }

        let { UserList } = this.state;
        return (
            <div style={{ 'width': '90%', 'maxWidth': '800px', 'margin': '0 auto' }}>
                <Grid
                    Columns={columns}
                    Data={UserList}
                    Actions={actions}
                    OnSelect={(SelectedUsers) => { this.UpdateState({ SelectedUsers }); }}
                    />
                {this.props.children}
            </div>
        );
    }
}
