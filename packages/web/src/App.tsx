import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./module/components/navbar/NavBar";
import { Router } from "./routes/Router";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
