import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

//import components
import PackingSlips from '../Dashboard/PackingSlips/PackingSlips';
import Inventory from '../Dashboard/Inventory/Inventory';
import Report from '../Dashboard/Report/Report';
import UserCreation from '../Dashboard/User/UserCreation';

export default function DashboardRouter() {
  return (
  <Switch>
    {/* Default page of dashboard */}
    <Route exact path="/dashboard">
      <Redirect to="/dashboard/packing-slips" /> 
    </Route>
    <Route path="/dashboard/inventory" component={ Inventory } />
    <Route path="/dashboard/reports" component={ Report } />
    <Route path="/dashboard/packing-slips" component={ PackingSlips } />
    <Route path="/dashboard/user-creation" component={ UserCreation } />
  </Switch>
  );
}