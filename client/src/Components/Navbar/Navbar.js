import {React, Fragment} from 'react';
import './Navbar.css';

function Navbar () {
  return (
    <Fragment>
      <nav class="navbar navbar-expand-md m-0 p-0">
        <div class="container-sm">

          {/* <!-- toggle button for mobile nav --> */}
          <button
            class="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main-nav"
            aria-controls="main-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>

          {/* <!-- navbar Links --> */}
          <div
            class="collapse navbar-collapse justify-content-center align-center"
            id="main-nav"
          >
            <ul class="navbar-nav">
              <li class="nav-item line-hover">
                <a href="#home" class="nav-link px-2 mx-2">Home</a>
              </li>
              <li class="nav-item line-hover">
                <a href="#timeline" class="nav-link px-2 mx-2">Timeline</a>
              </li>
              <li class="nav-item line-hover">
                <a href="#tracks" class="nav-link px-2 mx-2">Tracks</a>
              </li>

              <li className="nav-item">
                <a href="/" className="btn nav-btn px-3 mx-3">
                  Register
                </a>
              </li>

              <li class="nav-item line-hover">
                <a href="#prizes" class="nav-link px-2 mx-2">Prizes</a>
              </li>
              <li class="nav-item line-hover">
                <a href="#rules" class="nav-link px-2 mx-2">Rules</a>
              </li>
              <li class="nav-item line-hover">
                <a href="#contactUs" class="nav-link px-2 mx-2">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}

export default Navbar;
