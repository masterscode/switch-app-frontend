import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./components/routes";
import './styles/style.scss';// custom style
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}  

export default App;
