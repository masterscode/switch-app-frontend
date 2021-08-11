import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ClientError from '../pages/404';
import Home  from '../pages/Home';
import { Login } from '../pages/Login';
import Register from '../pages/Register';
import ContactUs from '../pages/user/ContactUs';
import Profile from '../pages/user/Profile';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Route path="/register" exact component={Register} />
    <Route path="/view-profile" exact component={Profile} />
    <Route path="/contact-us" exact component={ContactUs} />
    <Route path="/404" exact component={ClientError} />
    <Redirect to='/404' />
  </Switch>
);

export default Routes;
