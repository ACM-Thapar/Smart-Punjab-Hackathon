import {React, Fragment, useState} from 'react';
import Fade from 'react-reveal/Fade';
import {Bounce} from 'react-reveal';
import './Tracks.css';
import automationLogo from './../../Assets/automationLogo.png';
import madtechLogo from './../../Assets/madtechLogo.png';
import agritechLogo from './../../Assets/agritechLogo.png';
import smartCityLogo from './../../Assets/smartCityLogo.png';
import openInnLogo from './../../Assets/openInnLogo.png';
import ModalComponent from 'react-modal';

function Tracks () {
  const [modal1IsOpen, setmodal1IsOpen] = useState (false);
  const [modal2IsOpen, setmodal2IsOpen] = useState (false);
  const [modal3IsOpen, setmodal3IsOpen] = useState (false);
  const [modal4IsOpen, setmodal4IsOpen] = useState (false);
  const [modal5IsOpen, setmodal5IsOpen] = useState (false);
  return (
    <Fragment>
      <section id="tracks">
        <div className="tracks container-fluid p-5 m-0 row justify-content-center">
          <Fade>
            <h1 className="m-0 col-10">Tracks</h1>
            <span className>
              Click on the tracks to know the problem statements
            </span>
            <div className="trackBox col-11 p-5 mb-5">

              {/* Automation */}
              <Bounce left>
                <div id="item-0" onClick={() => setmodal1IsOpen (true)}>
                  <img
                    src={automationLogo}
                    alt="Automation"
                    className="img-fluid"
                    draggable="false"
                  />
                  <h2 className="p-3">Automation</h2>
                </div>

                <ModalComponent
                  isOpen={modal1IsOpen}
                  onRequestClose={() => setmodal1IsOpen (false)}
                >
                  <h2>Automation</h2>
                  <p>Modal content</p>
                  <div id="tabstabs" className="tabs">
                  <div id="tabtab" className="tab">
                    <input type="radio" id="rd11" name="rd" />
                    <label id="tabtab-label" className="tab-label" htmlFor="rd11">Problem Statement 1</label>
                    <div id="tabtab-content" className="tab-content">
                     Coming Soon!
                    </div>
                  </div>
                  <div id="tabtab" className="tab">
                    <input type="radio" id="rd12" name="rd" />
                    <label id="tabtab-label" className="tab-label" htmlFor="rd12">Problem Statement 2</label>
                    <div id="tabtab-content" className="tab-content">
                      Coming Soon!
                    </div>
                  </div>
                  <div id="tabtab" className="tab">
                    <input type="radio" id="rd13" name="rd" />
                    <label id="tabtab-label" className="tab-label" htmlFor="rd13">Problem Statement 3</label>
                    <div id="tabtab-content"  className="tab-content">
                     Coming Soon!
                    </div>
                  </div>
                </div>
                  <button onClick={() => setmodal1IsOpen (false)}>Close</button>
                </ModalComponent>

                {/* MadTech */}

                <div id="item-1" onClick={() => setmodal2IsOpen (true)}>
                  <img
                    src={madtechLogo}
                    alt="Automation"
                    className="img-fluid"
                    draggable="false"
                  />
                  <h2 className="p-3">Mad-Tech</h2>
                </div>
                <ModalComponent
                  isOpen={modal2IsOpen}
                  onRequestClose={() => setmodal2IsOpen (false)}
                >
                  <h2>Mad-Tech</h2>
                  <p>Modal content</p>
                  <div id="tabstabs" className="tabs">
                  <div id="tabtab" className="tab">
                    <input type="radio" id="rd11" name="rd" />
                    <label id="tabtab-label" className="tab-label" htmlFor="rd11">Problem Statement 1</label>
                    <div id="tabtab-content" className="tab-content">
                     Coming Soon!
                    </div>
                  </div>
                  <div id="tabtab" className="tab">
                    <input type="radio" id="rd12" name="rd" />
                    <label id="tabtab-label" className="tab-label" htmlFor="rd12">Problem Statement 2</label>
                    <div id="tabtab-content" className="tab-content">
                      Coming Soon!
                    </div>
                  </div>
                  <div id="tabtab" className="tab">
                    <input type="radio" id="rd13" name="rd" />
                    <label id="tabtab-label" className="tab-label" htmlFor="rd13">Problem Statement 3</label>
                    <div id="tabtab-content"  className="tab-content">
                    Coming Soon!
                    </div>
                  </div>
                </div>
                  <button onClick={() => setmodal2IsOpen (false)}>Close</button>
                </ModalComponent>
              </Bounce>

              {/* Open Innovation */}
              <div id="item-2" onClick={() => setmodal3IsOpen (true)}>
                <img
                  src={openInnLogo}
                  alt="Automation"
                  className="img-fluid"
                  draggable="false"
                />
                <h2 className="p-3">Open Innovation</h2>
              </div>
             
              <ModalComponent
                isOpen={modal3IsOpen}
                onRequestClose={() => setmodal3IsOpen (false)}
              >
                <h2>Open Innovation</h2>
                <p>Modal content</p>
                <div id="tabstabs" className="tabs">
                  <div id="tabtab" className="tab">
                    <input type="radio" id="rd11" name="rd" />
                    <label id="tabtab-label" className="tab-label" htmlFor="rd11">Problem Statement 1</label>
                    <div id="tabtab-content" className="tab-content">
                     Coming Soon!
                    </div>
                  </div>
                  <div id="tabtab" className="tab">
                    <input type="radio" id="rd12" name="rd" />
                    <label id="tabtab-label" className="tab-label" htmlFor="rd12">Problem Statement 2</label>
                    <div id="tabtab-content" className="tab-content">
                   Coming Soon!
                    </div>
                  </div>
                  <div id="tabtab" className="tab">
                    <input type="radio" id="rd13" name="rd" />
                    <label id="tabtab-label" className="tab-label" htmlFor="rd13">Problem Statement 3</label>
                    <div id="tabtab-content"  className="tab-content">
                    Coming Soon!
                    </div>
                  </div>
                </div>
                <button onClick={() => setmodal3IsOpen (false)}>Close</button>
              </ModalComponent>
              <Bounce right>

                {/* Agri Tech */}
                <div id="item-3" onClick={() => setmodal4IsOpen (true)}>
                  <img
                    src={agritechLogo}
                    alt="Automation"
                    className="img-fluid"
                    draggable="false"
                  />
                  <h2 className="p-3">Agri-Tech</h2>
                </div>
                <ModalComponent
                  isOpen={modal4IsOpen}
                  onRequestClose={() => setmodal4IsOpen (false)}
                >
                  <h2>Agri-Tech</h2>
                  <p>Modal content</p>
                  <div id="tabstabs" className="tabs">
                  <div id="tabtab" className="tab">
                    <input type="radio" id="rd11" name="rd" />
                    <label id="tabtab-label" className="tab-label" htmlFor="rd11">Problem Statement 1</label>
                    <div id="tabtab-content" className="tab-content">
                    Coming Soon!
                    </div>
                  </div>
                  <div id="tabtab" className="tab">
                    <input type="radio" id="rd12" name="rd" />
                    <label id="tabtab-label" className="tab-label" htmlFor="rd12">Problem Statement 2</label>
                    <div id="tabtab-content" className="tab-content">
                    Coming Soon!
                    </div>
                  </div>
                  <div id="tabtab" className="tab">
                    <input type="radio" id="rd13" name="rd" />
                    <label id="tabtab-label" className="tab-label" htmlFor="rd13">Problem Statement 3</label>
                    <div id="tabtab-content"  className="tab-content">
                    Coming Soon!
                    </div>
                  </div>
                </div>
                  <button onClick={() => setmodal4IsOpen (false)}>Close</button>
                </ModalComponent>
                <div id="item-4" onClick={() => setmodal5IsOpen (true)}>
                  <img
                    src={smartCityLogo}
                    alt="Automation"
                    className="img-fluid"
                    draggable="false"
                  />
                  <h3 className="p-3">Smart Cities</h3>
                </div>
                <ModalComponent
                  isOpen={modal5IsOpen}
                  onRequestClose={() => setmodal5IsOpen (false)}
                >
                  <h2>Smart Cities</h2>
                  <p>Modal content</p>
                  <div id="tabstabs" className="tabs">
                  <div id="tabtab" className="tab">
                    <input type="radio" id="rd11" name="rd" />
                    <label id="tabtab-label" className="tab-label" htmlFor="rd11">Problem Statement 1</label>
                    <div id="tabtab-content" className="tab-content">
                    Coming Soon!
                    </div>
                  </div>
                  <div id="tabtab" className="tab">
                    <input type="radio" id="rd12" name="rd" />
                    <label id="tabtab-label" className="tab-label" htmlFor="rd12">Problem Statement 2</label>
                    <div id="tabtab-content" className="tab-content">
                    Coming Soon!
                    </div>
                  </div>
                  <div id="tabtab" className="tab">
                    <input type="radio" id="rd13" name="rd" />
                    <label id="tabtab-label" className="tab-label" htmlFor="rd13">Problem Statement 3</label>
                    <div id="tabtab-content"  className="tab-content">
                    Coming Soon!
                    </div>
                  </div>
                </div>
                  <button onClick={() => setmodal5IsOpen (false)}>Close</button>
                </ModalComponent>
              </Bounce>
            </div>
          </Fade>
        </div>
      </section>
    </Fragment>
  );
}

export default Tracks;
