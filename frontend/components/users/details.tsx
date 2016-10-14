import * as React from 'react';
import { Dialog, Button, Form, Input } from 'ui';
import { DefaultComponent } from 'shared';
import { UsersRepository } from 'repository-store';

export default class UserDetailsPageComponent extends DefaultComponent<pages.users.details.IProps, pages.users.details.IState> {
    private unwatchStore: Function;
    private get selectedUserId(): string {
        return this.props.params.id;
    }

    private get isEditForm(): boolean {
        return !!this.state.UserData.id;
    }
    private defaultState: pages.users.details.IState 
        = { UserData: { email: '', firstName: '', id: null, lastName: '', login: '' } };
    constructor() {
        super();
        this.state = this.defaultState;
    }

    public componentWillUnmount(): void {
        this.unwatchStore();
    }

    public componentWillMount(): void {
        if (!!this.selectedUserId) {
            UsersRepository.LoadUser(this.selectedUserId);
        }

        this.unwatchStore = UsersRepository.Store((data) => {
            let [ UserData ] = data.Items.filter( u => u.id === this.selectedUserId);
            if (!!UserData) {
                this.UpdateState({ UserData });
            } else {
                this.UpdateState(this.defaultState);
            }
        });
    }

    public render(): any {
        let { UserData } = this.state;

        const actions = [
            <Button key='cloase' Text='Cancel' Type='button' OnClick={() => {  }} />,
            <Button key='save' Text={this.isEditForm ? 'EditUserButtonText' : 'AddUserButtonText' } Type='submit' />,
        ];

        return (
            <Form OnSubmit={this.submitForm.bind(this)}>
                <Dialog Title={ !!this.isEditForm ? 'EditUserHeaderText' : 'AddUserHeaderText' } Actions={ actions }>
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

    private cloase(): void {
        // this.Navigate('/Users');
    }

    private submitForm(): Promise<any> {
        let { UserData } = this.state;
        if (this.isEditForm){
            UsersRepository.UpdateUser(this.state.UserData);
        } else {
            UsersRepository.CreateUser(this.state.UserData);
        }
        return null;
    }
}
