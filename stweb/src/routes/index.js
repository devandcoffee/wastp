import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { Login, Dashboard } from '../components/';

const Root = () => (
  <Router>
    <div>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/login" component={Login} />
    </div>
  </Router>
)

export default Root;
