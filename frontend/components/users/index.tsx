import * as React from 'react';
import userList from './list';
import userDetails from './details';
import { Route } from 'react-router';

export default (
    <Route path='users' component={userList} >
        <Route path='details' component={userDetails} ></Route>
    </Route>);
