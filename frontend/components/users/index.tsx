import * as React from 'react';
import userList from './list';
import userDetails from './details';
import { Route } from 'react-router';

export default (
    <Route path='users' component={userList} >
        <Route path='add' component={userDetails} ></Route>
        <Route path='details/:id' component={userDetails} ></Route>
    </Route>);
