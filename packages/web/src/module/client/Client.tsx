import React from "react";
import { Route, Switch, useLocation } from "react-router";
import { Home } from "./Home";
export const Client = () => (
  <div>
    <Switch>
      <div>as</div>
      {console.log(useLocation())}
      <Route exact path="/client" component={Home} />
    </Switch>
  </div>
);
