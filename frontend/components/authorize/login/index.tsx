import * as React from 'react';
import { Input, Panel, Button, Form } from 'ui';

export default class LogInPageComponent extends React.Component<pages.login.IProps, pages.login.IState> {
    constructor(){
      super();
      this.state = { Login : '', Password : '' };
    }

    private updateState(value : any): void {
      var newState = Object.assign({}, this.state, value);
      this.setState(newState);
    }

    public render(): React.ReactElement<{}> {
        let actions = [<Button Text='Login' OnClick={() =>{ alert('click'); }} />];
        return (
            <Form OnSubmit={() => { alert('submit'); }}>
                <Panel Title='Login to see more' Actions={[<Button key='login' Text='Login' Type={'submit'} />]}>
                    <Input
                      Autofocus={true}
                      Name="Login"
                      Text="Login"
                      OnChange={(Login) => { this.updateState({ Login }) } }
                      Value={this.state.Login}
                      ErrorText={this.state.Login.length === 0 ? 'field.required' : null } />
                    <Input
                      Name="Password"
                      Text="Password"
                      Type='password'
                      OnChange={(Password) => { this.updateState({ Password }) } }
                      Value={this.state.Password} />
                </Panel>
            </Form>
        );
    }
}
