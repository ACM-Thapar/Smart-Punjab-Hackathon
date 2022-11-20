import {React, Fragment} from 'react';
import Fade from 'react-reveal';
import './LandingPage.css';
import Mainbg from '../../Assets/MainBg.png';
import Navbar from '../../Components/Navbar/Navbar';
import MainBgSmol from './../../Assets/MainBgSmol.png';

function LandingPage () {
  return (
    <Fragment>
      <div className="landing container-fluid p-0 m-0 text-align-center">
        <Fade top>
          <Navbar className="navbar" />
        </Fade>
        <img
          src={Mainbg}
          alt="Background"
          className="img-fluid d-none d-md-inline"
        />
        <img src={MainBgSmol} className="d-md-none" alt="BackGround" />
        <Fade bottom>
          <h1>SMART PUNJAB HACKATHON</h1>
          <div className="text-align-center container-fluid landingContainer">
            <a
              href="https://smart-punjab-hack.devfolio.co/"
              style={{
                textDecoration: 'none',
                color: 'white',
                marginTop: '2rem',
                // marginLeft: 'auto',
              }}
              className="custom-cutout-button nav-btn rg-btn d-md-none"
            >
              Register
            </a>
            <div
              className="apply-button"
              data-hackathon-slug="smart-punjab-hack"
              data-button-theme="dark"
              style={{height: 44, width: 312}}
            />
          </div>
        </Fade>
      </div>
    </Fragment>
  );
}

export default LandingPage;
