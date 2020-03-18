import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

//import components
import PackingSlips from '../Dashboard/PackingSlips';
import UserCreation from '../Dashboard/UserCreation';

export default function DashboardRouter() {
  return (
  <Switch>
    <Route exact path="/dashboard">
      <Redirect to="/dashboard/packing-slip" /> 
    </Route>
    <Route path="/dashboard/inventory" />
    <Route path="/dashboard/packing-slip" component={ PackingSlips } />
    <Route path="/dashboard/user-creation" component={ UserCreation } />
  </Switch>
  );
}