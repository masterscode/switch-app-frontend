import React from "react";
import { Switch, Route } from "react-router";
import Dashboard from "../pages/dashboard";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
    </Switch>
  );
};

export default Routes;
