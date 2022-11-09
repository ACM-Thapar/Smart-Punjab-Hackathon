import {React, Fragment} from 'react';
import './LandingPage.css';
import Mainbg from '../../Assets/MainBg.png';
import Navbar from '../../Components/Navbar/Navbar';

function LandingPage () {
  return (
    <Fragment>
      <div className="landing container-fluid p-0 m-0">
        <Navbar className="navbar" />
        <img src={Mainbg} alt="" className="img-fluid" />
        <h1>SMART PUNJAB HACKATHON</h1>
      </div>
    </Fragment>
  );
}

export default LandingPage;
