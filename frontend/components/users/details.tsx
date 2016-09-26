import * as React from 'react';
import { Dialog, Button } from 'ui';
import { post } from 'ajax';
import { StoreComponent } from 'shared';

export default class UserDetailsPageComponent extends StoreComponent<pages.users.list.IProps, pages.users.list.IState> {
    public render(): any {

        return (
            <Dialog Title='Test dialog' Actions={ [<Button key='save' Text='Save' />] }>
                <div>test dialog :)</div>
            </Dialog>
        );
    }
}
