import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid w-75 navigation">
          <a class="navbar-brand name-logo" href="/">
            ByteFix
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link ms-5" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link ms-5" href="/">
                  About us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link ms-5" href="/">
                  Service
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link ms-5" href="/admin">
                  Admin
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link ms-5" href="/">
                  Team
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link ms-5" href="/">
                  Blog
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link ms-5" href="/">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
