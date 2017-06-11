import React from 'react';
import { NotFound, Home, Tournaments } from '../index';
import { Route, Switch } from 'react-router';

const Contents = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/tournaments" component={Tournaments} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default Contents;
