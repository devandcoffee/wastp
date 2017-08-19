import React from "react";
import configureStore from "../store/configureStore";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LocaleProvider } from "antd";
import enUS from "antd/lib/locale-provider/en_US";

import DashboardContainer from "./DashboardContainer";
import LoginContainer from "./LoginContainer";

const store = configureStore();

const App = () =>
  <Provider store={store}>
    <LocaleProvider locale={enUS}>
      <Router>
        <Switch>
          <Route exact path="/login" component={LoginContainer} />
          <Route path="/" component={DashboardContainer} />
        </Switch>
      </Router>
    </LocaleProvider>
  </Provider>;

export default App;
