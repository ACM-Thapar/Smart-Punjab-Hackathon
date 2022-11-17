import {React, Fragment} from 'react';
import {Fade} from 'react-reveal';
import './Sponsors.css';
import Devfolio from './../../Assets/Devfolio.png';
import Polygon from './../../Assets/Polygon.png';
import Filecoin from './../../Assets/Filecoin.png';
import Replit from './../../Assets/Replit.png';
import Solana from './../../Assets/Solana.png';

function Sponsors () {
  return (
    <Fragment>
      <section id="sponsors">
        <div className="sponsors container-fluid justify-content-center p-5 m-0 row">
          <Fade>
            <h1>Sponsors</h1>
            <div className="sponsorBox container-fluid row justify-content-center m-0 p-0">

              <div className="title">
                <h2>Title Sponsors</h2>
                <p>To be announced soon</p>
              </div>

              <div className="power">
                <h2>
                  Power Sponsors
                </h2>
                <div className="powers">
                  <img src={Devfolio} alt="Dvvfolio" className="img-fluid" />
                  <img src={Polygon} alt="Polygon" className="img-fluid" />
                </div>
              </div>

              <div className="associate">
                <h2>Associate sponsors</h2>
                <div className="associates">
                  <img src={Filecoin} alt="Filecoin" className="img-fluid" />
                  <img src={Replit} alt="Replit" className="img-fluid" />
                  <img src={Solana} alt="Solana" className="img-fluid solana" />
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </section>
    </Fragment>
  );
}

export default Sponsors;
