import React from "react";
import { Route, Switch, useLocation } from "react-router";
import { Router } from "../../routes/Router";
import NavBar from "../components/navbar/NavBar";
import { Sidebar } from "../components/sidebar/Sidebar";
import { Page } from "../components/wrappers/Page";
import { Wrapper } from "../components/wrappers/Wrapper";
import { Home } from "./Home";
export const Client = () => (
  <>
    <Page>
      <Wrapper>
        <NavBar />
        <Switch>
          <Route path={useLocation().pathname} component={Home} />
        </Switch>
      </Wrapper>

      <Sidebar />
    </Page>
  </>
);
