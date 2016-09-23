import * as React from 'react';
import { Input, Panel, Button, Form } from 'ui';
import { post } from 'ajax';
import { StoreComponent } from 'shared';

export default class LogInPageComponent extends StoreComponent<pages.login.IProps, pages.login.IState> {
    constructor() {
        super();
        this.state = { IsAuthenticated: false, Login: '', Password: '' };
    }

    public StoreDataReduce(data: any): any {
        let { userData } = data;
        return userData;
    }

    public UpdateFromStore(data: any): void {
        let { IsAuthenticated } = data;
        this.UpdateState({ IsAuthenticated });
    }

    public render(): React.ReactElement<{}> {
        if (this.state.IsAuthenticated) {
            return <Panel Title='Already logged in' Actions={[
                <Button key='logout' Text='Logout' OnClick={() => this.Dispatch('authorize.logout')} DisplayType='raised' />,
                ]}>
                </Panel>;
        }
        return (
            <Form OnSubmit={this.SubmitLoginForm.bind(this)}>
                <Panel Title='Login to see more' Actions={[<Button key='login' Text='Login' Type={'submit'} DisplayType='raised' />]}>
                    <Input
                        Autofocus={true}
                        Name='Login'
                        Text='Login'
                        OnChange={(Login) => { this.UpdateState({ Login }); } }
                        Value={this.state.Login}
                        ErrorText={this.state.Login.length === 0 ? 'field.required' : null} />
                    <Input
                        Name='Password'
                        Text='Password'
                        Type='password'
                        OnChange={(Password) => { this.UpdateState({ Password }); } }
                        Value={this.state.Password} />
                </Panel>
            </Form >
        );
    }

    private SubmitLoginForm(): Promise<any> {
        return post('api/authorize', {
            login: this.state.Login,
            password: this.state.Password,
        }).then((data) => {
            if (data.isAuthenticated) {
                this.Dispatch('authorize.success');
            }
        });
    }
}
