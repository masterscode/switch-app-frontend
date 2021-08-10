import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import Register from '../pages/Register';
import UserDashboard from '../pages/user/UserDashboard';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/dashboard" exact component={Dashboard} />
    <Route path="/login" exact component={Login} />
    <Route path="/register" exact component={Register} />
    <Route path="/user-dashboard" exact component={UserDashboard} />
  </Switch>
);

export default Routes;
