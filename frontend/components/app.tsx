import * as React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import MasterComponent from './user-interface/masterContainer';
import LoginPage from './login/index';

export class App extends React.Component<{}, {}> {
    public render(): React.ReactElement<{}> {
        return (
            <Router history={browserHistory}>
                <Route path='/' component={MasterComponent} >
                    <Route path='/login' component={LoginPage} />
                </Route>
            </Router>);
    }
}
