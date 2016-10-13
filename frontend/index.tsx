import * as React from 'react';
import * as dom from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

import { Provider } from 'react-redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import MasterPage from './components/master';
import NoMatch from './components/noMatch';

import { LoginPage } from './components/authorize';
import UsersRouteData from './components/users';
import { store } from './flux/store';

const history = syncHistoryWithStore(browserHistory, store);

dom.render(
    (
        <div>
          <Provider store={store}>
              <Router history={browserHistory}>
                  <Route path='/' component={MasterPage}>
                      <Route path='login' component={LoginPage} />
                      { UsersRouteData }
                      <Route path='*' component={NoMatch}/>
                  </Route>
              </Router>
          </Provider>
        </div>
    ), document.getElementById('app'));
