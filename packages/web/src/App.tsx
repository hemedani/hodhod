import React from "react";
import "./App.css";
import { Button } from "./sharedCompnents/ButtonStyle";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { SellerReg } from "./components/SellerRegistration";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SellerDataInput from "./components/SellerDataInput";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/sellerregistration" component={SellerReg} />
          <Route path="/sellerdatainput" component={SellerDataInput} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
