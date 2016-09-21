import * as React from 'react';
import * as dom from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

import MasterPage from './components/master';
import NoMatch from './components/noMatch';

import { LoginPage } from './components/authorize';

dom.render(
    (
        <div>
            <Router history={browserHistory}>
                <Route path='/' component={MasterPage}>
                    <Route path='login' component={LoginPage} />
                    <Route path='*' component={NoMatch}/>
                </Route>
            </Router>
        </div>
    ), document.getElementById('app'));
