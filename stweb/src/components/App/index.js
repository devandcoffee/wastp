import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import { Login, Dashboard } from '../index';

const App = () => (
  <LocaleProvider locale={enUS}>
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/" component={Dashboard} />
      </Switch>
    </Router>
  </LocaleProvider>
)

export default App;
