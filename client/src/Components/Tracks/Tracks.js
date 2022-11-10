import {React, Fragment} from 'react';
import Fade from 'react-reveal/Fade';
import './Tracks.css';
import automationLogo from './../../Assets/automationLogo.png';
import madtechLogo from './../../Assets/madtechLogo.png';
import agritechLogo from './../../Assets/agritechLogo.png';
import smartCityLogo from './../../Assets/smartCityLogo.png';
import openInnLogo from './../../Assets/openInnLogo.png';

function Tracks () {
  return (
    <Fragment>
      <section id="tracks">
        <div className="tracks container-fluid p-5 m-0 row justify-content-center">
          <Fade>
            <h1 className="m-0 col-10">Tracks</h1>
            <div className="trackBox col-11 p-5 mb-5">
              <div id="item-0">
                <img
                  src={automationLogo}
                  alt="Automation"
                  className="img-fluid"
                />
                <h2 className="p-3">Automation</h2>
              </div>
              <div id="item-1">
                <img src={madtechLogo} alt="Automation" className="img-fluid" />
                <h2 className="p-3">Mad-Tech</h2>
              </div>
              <div id="item-2">
                <img src={openInnLogo} alt="Automation" className="img-fluid" />
                <h3 className="p-3">Open Innovation</h3>
              </div>
              <div id="item-1">
                <img src={madtechLogo} alt="Automation" className="img-fluid" />
                <h2 className="p-3">Mad-Tech</h2>
              </div>
              <div id="item-3">
                <img
                  src={agritechLogo}
                  alt="Automation"
                  className="img-fluid"
                />
                <h2 className="p-3">Agri-Tech</h2>
              </div>
              <div id="item-4">
                <img
                  src={smartCityLogo}
                  alt="Automation"
                  className="img-fluid"
                />
                <h3 className="p-3">Smart Cities</h3>
              </div>
            </div>
          </Fade>
        </div>
      </section>
    </Fragment>
  );
}

export default Tracks;
