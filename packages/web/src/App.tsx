import React from "react";
import "./App.css";
import { Button } from "./sharedCompnents/ButtonStyle";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <switch>
        <NavBar />
        <Home />
      </switch>
    </div>
  );
}

export default App;
