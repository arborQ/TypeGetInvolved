import * as React from 'react';
import { Input, Panel, Button, Form, Grid } from 'ui';
import { post } from 'ajax';
import { StoreComponent } from 'shared';

export default class LogInPageComponent extends StoreComponent<pages.users.list.IProps, pages.users.list.IState> {
    public render(): any {
        let columns: ui.grid.IGridColumn[] = [
            { Field: 'userName', Name: 'Name' },
            { Field: 'email', Name: 'Email' },
        ];

        return (
            <div style={{ 'width': '90%', 'max-width': '800px', 'margin': '0 auto' }}>
                <Grid Columns={columns} Data={[
                    { email: 'arbor@o2.pl', userName: 'arbor' },
                    { email: 'arbor@o2.pl', id: 1, userName: 'arbor' },
                    ]} />
            </div>
        );
    }
}
