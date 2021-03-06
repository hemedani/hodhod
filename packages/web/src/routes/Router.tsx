import { Route, Switch } from "react-router";
import { SellerRegistration } from "../module/register/SellerRegistration";
import { Login } from "../module/login/Login";
import { Path } from "./Path";
import { Client } from "../module/client/Client";

export const Router = () => (
  <Switch>
    <Route exact path={Path.home} component={Login} />
    <Route path={Path.sellerdatainput} component={SellerRegistration} />
    <Route path={Path.client} component={Client} />
  </Switch>
);
