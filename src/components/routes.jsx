import React from 'react';
import { Switch, Route } from 'react-router';
import Dashboard from '../pages/dashboard';
import { Home } from '../pages/Home';
import { Registration } from '../pages/Registration';

const Routes = ()=>{
    return (
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/register' exact  component={Registration} />
        </Switch>
    );
}

export default Routes;