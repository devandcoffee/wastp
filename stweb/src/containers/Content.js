import React from "react";
import { Route, Switch } from "react-router";

import NotFound from "../components/NotFound";
import HomeContainer from "./HomeContainer";
import TournamentsContainer from "./TournamentContainer";

/*
* This component will act as a renderContent for the dashboard.
*/
const Content = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/tournaments" component={TournamentsContainer} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Content;
