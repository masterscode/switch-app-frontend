import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="" alt="switch-logo" />
        </a>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ml-auto" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link btn btn-primary text-white  text-uppercase fw-bold" to="/">
              Buy Electricity
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
