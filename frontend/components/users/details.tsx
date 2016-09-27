import * as React from 'react';
import { Dialog, Button, Form, Input } from 'ui';
import { post } from 'ajax';
import { StoreComponent } from 'shared';

export default class UserDetailsPageComponent extends StoreComponent<pages.users.details.IProps, pages.users.details.IState> {
    constructor() {
        super();
        this.state = { UserData : { email: '', firstName: '', lastName: '', login: '' } };
    }
    public render(): any {
        let { UserData } = this.state;
        return (
            <Form OnSubmit={this.submitForm.bind(this)}>
                <Dialog Title='Add user' Actions={ [<Button key='save' Text='Save' Type='submit' />] }>
                    <Input
                    Text='Login'
                    Value={UserData.login}
                    OnChange={(login) => { this.updateUserData({login}); }}
                    Name='Login' />
                    <Input
                    Text='Email'
                    Value={UserData.email}
                    OnChange={(email) => { this.updateUserData({email}); }}
                    Name='Email'
                    Type='email' />
                    <Input
                    Text='FirstName'
                    Value={UserData.firstName}
                    OnChange={(firstName) => { this.updateUserData({firstName}); }}
                    Name='FirstName' />
                    <Input
                    Text='LastName'
                    Value={UserData.lastName}
                    OnChange={(lastName) => { this.updateUserData({lastName}); }}
                    Name='LastName' />
                </Dialog>
            </Form>
        );
    }
    private updateUserData(userChunk: any): void {
        let { UserData } = this.state;
        let newUserData = Object.assign({}, UserData, userChunk);
        this.UpdateState({ UserData: newUserData });
    }

    private submitForm(): Promise<any> {
        let { UserData } = this.state;
        return post('api/users', UserData);
    }
}
