import React from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { SellerRegistration } from "./components/SellerRegistration";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/sellerdatainput" component={SellerRegistration} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
