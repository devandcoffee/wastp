import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { Login, Dashboard } from '../index';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route path="/" component={Dashboard} />
    </Switch>
  </Router>
)

export default App;
