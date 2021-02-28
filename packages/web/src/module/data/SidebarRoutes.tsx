import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/" exact component={Home} />
        <Route path="/sellerdatainput" component={SellerRegistration} /> */}
      </Switch>
    </BrowserRouter>
  );
};
