import React from 'react';
import { Switch, Route } from 'react-router';
import Dashboard from '../pages/dashboard';
import { Home } from '../pages/Home';

const Routes = ()=>{
    return (
        <Switch>
            <Route to='/' exact component={Home} />
            <Route to='/dashboard' component={Dashboard} />
        </Switch>
    );
}

export default Routes;