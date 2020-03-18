import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

//import components
import PackingSlips from '../Dashboard/PackingSlips';
import Inventory from '../Dashboard/Inventory';

export default function DashboardRouter() {
  return (
  <Switch>
    <Route exact path="/dashboard">
      <Redirect to="/dashboard/packing-slip" /> 
    </Route>
    <Route path="/dashboard/inventory" component={ Inventory } />
    <Route path="/dashboard/packing-slip" component={ PackingSlips } />
  </Switch>
  );
}