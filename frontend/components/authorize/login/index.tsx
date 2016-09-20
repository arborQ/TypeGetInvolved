import * as React from 'react';
import { Input, Panel, Button, Form } from 'ui';
import { post } from 'ajax';
import { store } from 'application-store';

export default class LogInPageComponent extends React.Component<pages.login.IProps, pages.login.IState> {
    constructor() {
        super();
        this.state = { Login: '', Password: '', IsAuthenticated: false };
    }

    private unsubscribeStore : Function;

    private updateFromStore(){
      var { userData } = store.getState();
            var { IsAuthenticated } = userData;
            this.setState(Object.assign({}, this.state, { IsAuthenticated }));
    }

    private updateState(value: any): void {
        var newState = Object.assign({}, this.state, value);
        this.setState(newState);
    }
    public componentWillUnmount() {
      this.unsubscribeStore();
    }
    public componentWillMount() {
        this.unsubscribeStore = store.subscribe(this.updateFromStore.bind(this));
        this.updateFromStore();
    }

    public render(): React.ReactElement<{}> {
        if (this.state.IsAuthenticated) {
            return <div>no no :)</div>
        }
        return (
            <Form OnSubmit= {() => post('api/authorize', { login: this.state.Login, password: this.state.Password }).then((data) => { store.dispatch({ type: 'authorize.success' }); })}>
                <Panel Title='Login to see more' Actions={[<Button key='login' Text='Login' Type={'submit'} />]}>
                    <Input
                        Autofocus={true}
                        Name="Login"
                        Text="Login"
                        OnChange={(Login) => { this.updateState({ Login }) } }
                        Value={this.state.Login}
                        ErrorText={this.state.Login.length === 0 ? 'field.required' : null} />
                    <Input
                        Name="Password"
                        Text="Password"
                        Type='password'
                        OnChange={(Password) => { this.updateState({ Password }) } }
                        Value={this.state.Password} />
                </Panel>
            </Form >
        );
    }
}
