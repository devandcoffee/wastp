import React from 'react';
import { NotFound, Home, Torneos } from '../index';
import { Route, Switch } from 'react-router';

const Contents = () => {
  return (
    <Switch>
      <Route exact path="/dashboard/home" component={Home} />
      <Route exact path="/dashboard/gestion/torneos" component={Torneos} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default Contents;
