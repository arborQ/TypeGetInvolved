import * as React from 'react';
import { Input, Panel, Button, Form } from 'ui';

export default class LogInPageComponent extends React.Component<{ /* props */ }, { /* state */ }> {
    public render(): React.ReactElement<{}> {
        let actions = [<Button Text='Login' OnClick={() =>{ alert('click'); }} />];
        return (
            <Form OnSubmit={() => { alert('submit'); }}>
                <Panel Title='Login to see more' Actions={[<Button key='login' Text='Login' Type={'submit'} />]}>
                    <Input Autofocus={true} Name="Login" Text="Login" OnChange={console.log} />
                    <Input Name="Password" Text="Password" Type='password' OnChange={console.log} />
                </Panel>
            </Form>
        );
    }
}
