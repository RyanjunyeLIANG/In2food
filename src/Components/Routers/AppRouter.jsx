import React from 'react';
import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom';

// import fakeAuth from './Components/FakeAuth';
import Login from '../Login';
import Dashboard from '../Dashboard/Dashboard';

// Authenticate function with fake-auth component
// function PrivateRoute({ children, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={() =>
//         (
//           fakeAuth.isAuthenticated ? (children) : (<Redirect to="/login" />)
//         )
//       }
//     />
//   );
// }

export default function AppRouter() {
  return (
    <Router>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login" component={Login} />
        
        {/* Test router for management page */}
        <Route path="/dashboard" component={Dashboard} />
        {/* Authenticate router for management page */}
        {/* <PrivateRoute exact path="/dashboard">
          <Dashboard />
        </PrivateRoute> */}
    </Router>
  )
}