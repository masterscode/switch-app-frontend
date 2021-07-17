import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./components/routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import './styles/style.scss';// custom style

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}  

export default App;
