import {React, Fragment, useState} from 'react';
import './Navbar.css';
// import {HiBars3BottomRight} from 'react-icons/hi2';
import {Sling as Hamburger} from 'hamburger-react';

function Navbar () {
  const [isOpen, setOpen] = useState (false);

  return (
    <Fragment>
      <nav class="navbar navbar-expand-md m-0 p-0">
        <div class="container-sm">

          {/* <!-- toggle button for mobile nav --> */}
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main-nav"
            aria-controls="main-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <HiBars3BottomRight className="navbar-toggler-icon text-white" /> */}
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              color="#fff"
              className="navbar-toggler-icon text-white"
              easing="ease-in"
              size={25}
            />
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

              <li className="nav-item d-none d-md-inline">
                <a
                  href="https://forms.gle/MLH5rzZygiSXmxGr8"
                  style={{
                    textDecoration: 'none',
                    color: 'white',
                    marginTop: '3px',
                  }}
                  className="custom-cutout-button"
                >
                  Register
                </a>
              </li>

              <li className="nav-item d-md-none">
                <a
                  href="https://forms.gle/MLH5rzZygiSXmxGr8"
                  className="nav-link px-2 mx-2"
                >
                  Register
                </a>
              </li>

              <li class="nav-item line-hover">
                <a href="#prizes" class="nav-link px-2 mx-2">Prizes</a>
              </li>
              <li class="nav-item line-hover">
                <a href="#faqs" class="nav-link px-2 mx-2">FAQs</a>
              </li>
              <li class="nav-item line-hover">
                <a href="#contactUs" id="contactus" class="nav-link px-2 mx-2">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}

export default Navbar;
