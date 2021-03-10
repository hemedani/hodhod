import React from "react";
import { Route, Switch, useLocation } from "react-router";
import NavBar from "../components/navbar/NavBar";
import { Sidebar } from "../components/sidebar/Sidebar";
import { Page } from "../components/wrappers/Page";
import { Wrapper } from "../components/wrappers/Wrapper";
export const Debts = () => (
  <>
    <Page>
      <Sidebar />
      <Wrapper>
        <NavBar />
      </Wrapper>
    </Page>
  </>
);
