import {React, Fragment} from 'react';
import Fade from 'react-reveal';
import './LandingPage.css';
import Mainbg from '../../Assets/MainBg.png';
import Navbar from '../../Components/Navbar/Navbar';
import MainBgSmol from './../../Assets/MainBgSmol.png';

function LandingPage () {
  return (
    <Fragment>
      <div className="landing container-fluid p-0 m-0">
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
        </Fade>
      </div>
    </Fragment>
  );
}

export default LandingPage;
