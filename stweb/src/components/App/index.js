import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { Login, Dashboard } from '../';

const App = () => (
  <Router>
    <div>
      <Route exact path="/login" component={Login} />
      <Route path="/" component={Dashboard} />
    </div>
  </Router>
)

export default App;
