import React from "react";
import Nav from "react-bootstrap/Nav";

import "bootstrap/js/dist/dropdown";

import "bootstrap/js/dist/collapse";

function NavigationBar({ Toggle }) {
  const Logout=()=>{
    localStorage.clear();
    window.location.reload();
  }
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-transparent">
      <i className="navbar-brand bi bi-justify-left fs-4" onClick={Toggle}></i>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="bi bi-justify"></i>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle text-white"
              href="#"
              id="dropdownId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Cloth-Rental
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownId">
              <Nav.Link className="dropdown-item text-black" onClick={Logout}>Logout</Nav.Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default NavigationBar;
