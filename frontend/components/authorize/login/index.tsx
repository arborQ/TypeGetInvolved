import * as React from 'react';
import { Input, Panel, Button, Form } from 'ui';
import { post } from 'ajax';
import { StoreComponent } from 'shared';

export default class LogInPageComponent extends StoreComponent<pages.login.IProps, pages.login.IState> {
    constructor() {
        super();
        this.state = { Login: '', Password: '', IsAuthenticated: false };
    }

    public UpdateFromStore(data : any) : void{
        var { IsAuthenticated } = data;
        this.UpdateState({ IsAuthenticated });
    }

    public render(): React.ReactElement<{}> {
        if (this.state.IsAuthenticated) {
            return <div>no no :)</div>
        }
        return (
            <Form OnSubmit= {() => post('api/authorize', { login: this.state.Login, password: this.state.Password }).then((data) => { this.Dispatch('authorize.success', { token: data.token })})}>
                <Panel Title='Login to see more' Actions={[<Button key='login' Text='Login' Type={'submit'} />]}>
                    <Input
                        Autofocus={true}
                        Name="Login"
                        Text="Login"
                        OnChange={(Login) => { this.UpdateState({ Login }) } }
                        Value={this.state.Login}
                        ErrorText={this.state.Login.length === 0 ? 'field.required' : null} />
                    <Input
                        Name="Password"
                        Text="Password"
                        Type='password'
                        OnChange={(Password) => { this.UpdateState({ Password }) } }
                        Value={this.state.Password} />
                </Panel>
            </Form >
        );
    }
}
