import * as React from 'react';
import { Dialog, Button, Form, Input } from 'ui';
import { post } from 'ajax';
import { StoreComponent } from 'shared';

export default class UserDetailsPageComponent extends StoreComponent<pages.users.details.IProps, pages.users.details.IState> {
    constructor() {
        super();
        this.state = { email: '', firstName: '', lastName: '', login: '' };
    }
    public render(): any {
        return (
            <Form OnSubmit={this.submitForm.bind(this)}>
                <Dialog Title='Add user' Actions={ [<Button key='save' Text='Save' Type='submit' />] }>
                    <Input
                    Text='Login'
                    Value={this.state.login}
                    OnChange={(login) => { this.UpdateState({login}); }}
                    Name='Login' />
                    <Input
                    Text='Email'
                    Value={this.state.email}
                    OnChange={(email) => { this.UpdateState({email}); }}
                    Name='Email'
                    Type='email' />
                    <Input
                    Text='FirstName'
                    Value={this.state.firstName}
                    OnChange={(firstName) => { this.UpdateState({firstName}); }}
                    Name='FirstName' />
                    <Input
                    Text='LastName'
                    Value={this.state.lastName}
                    OnChange={(lastName) => { this.UpdateState({lastName}); }}
                    Name='LastName' />
                </Dialog>
            </Form>
        );
    }

    private submitForm(): Promise<any> {
        return post('api/users', this.state);
    }
}
