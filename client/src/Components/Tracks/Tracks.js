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
            <span id="clickon col-11">
              Click on the tracks to know the problem statements
            </span>
            <div className="trackBox col-11 p-5 mb-5 justify-content-center">

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
                  <div id="tabs" className="tabs">
                    <div id="tabtab" className="tab">
                      <input type="radio" id="rd11" name="rd" />
                      <label
                        id="tabtab-label"
                        className="tab-label"
                        htmlFor="rd11"
                      >
                        Problem Statement 1
                      </label>
                      <div id="tabtab-content" className="tab-content">
                        <strong> Smart Roads:</strong>
                        {' '}
                        Smart Pillars or sensors that may use Radio waves to measure the speed of upcoming vehicles and generate centralized data for overspeeding vehicles. Can be used for automatic Challan for violation.
                      </div>
                    </div>
                    <div id="tabtab" className="tab">
                      <input type="radio" id="rd12" name="rd" />
                      <label
                        id="tabtab-label"
                        className="tab-label"
                        htmlFor="rd12"
                      >
                        Problem Statement 2
                      </label>
                      <div id="tabtab-content" className="tab-content">
                        <string>Smart Translator:</string>
                        {' '}
                        To create a system for to-translation from one natural language (English) to another (Hindi) or vice versa, It may also have speech-to-text, text-to-speech conversion, classification tasks, designing chatbots, etc.
                      </div>
                    </div>
                    <div id="tabtab" className="tab">
                      <input type="radio" id="rd13" name="rd" />
                      <label
                        id="tabtab-label"
                        className="tab-label"
                        htmlFor="rd13"
                      >
                        Problem Statement 3
                      </label>
                      <div id="tabtab-content" className="tab-content">
                        <strong>Smart Test Tool:</strong>
                        <ul>

                          To build an application with the following features:

                          <li>
                            Provide a reliable and easy-to-use software tool that allows test creation and test-taking capabilities.
                          </li>
                          <li>
                            Provide a database that stores questions, which can be used to automatically generate tests based on specified criteria
                          </li>
                          <li>
                            Provide a secure test-taking application and powerful automated grading tool and non-automated grading capabilities
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
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
                  <div id="tabstabs" className="tabs">
                    <div id="tabtab" className="tab">
                      <input type="radio" id="rd11" name="rd" />
                      <label
                        id="tabtab-label"
                        className="tab-label"
                        htmlFor="rd11"
                      >
                        Problem Statement 1
                      </label>
                      <div id="tabtab-content" className="tab-content">
                        <strong>Anonymous Ads:</strong>
                        {' '}
                        A platform for agencies that stripes away any personal data points but still retains important and relevant information for the client to market to certain audiences
                      </div>
                    </div>
                    <div id="tabtab" className="tab">
                      <input type="radio" id="rd12" name="rd" />
                      <label
                        id="tabtab-label"
                        className="tab-label"
                        htmlFor="rd12"
                      >
                        Problem Statement 2
                      </label>
                      <div id="tabtab-content" className="tab-content">
                        <strong>Shift forecaster:</strong>
                        {' '}
                        An application that could give possible outcomes to a business about its campaigns and strategies with the help of big data.
                      </div>
                    </div>
                    <div id="tabtab" className="tab">
                      <input type="radio" id="rd13" name="rd" />
                      <label
                        id="tabtab-label"
                        className="tab-label"
                        htmlFor="rd13"
                      >
                        Problem Statement 3
                      </label>
                      <div id="tabtab-content" className="tab-content">
                        <strong>Anti-Ad blocker:</strong>
                        {' '}
                        A smart plugin that companies could use in their applications to bypass ad blockers.
                      </div>
                    </div>
                  </div>
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
                <h3 className="p-3">Open Innovation</h3>
              </div>

              <ModalComponent
                isOpen={modal3IsOpen}
                onRequestClose={() => setmodal3IsOpen (false)}
              >
                <h2>Open Innovation</h2>
                {/* <p className="m-5">
                 
                </p> */}
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
                  <div id="tabstabs" className="tabs">
                    <div id="tabtab" className="tab">
                      <input type="radio" id="rd11" name="rd" />
                      <label
                        id="tabtab-label"
                        className="tab-label"
                        htmlFor="rd11"
                      >
                        Problem Statement 1
                      </label>
                      <div id="tabtab-content" className="tab-content">
                        System for providing proper fertilizers, manures, and other nutrients timely as the crop needs on the basis of climate, soil type, etc.
                      </div>
                    </div>
                    <div id="tabtab" className="tab">
                      <input type="radio" id="rd12" name="rd" />
                      <label
                        id="tabtab-label"
                        className="tab-label"
                        htmlFor="rd12"
                      >
                        Problem Statement 2
                      </label>
                      <div id="tabtab-content" className="tab-content">
                        <strong>Automated Farming:</strong>
                        {' '}
                        Bring automation into the field of farming. Farmers can control farming activities like irrigation, fertilization, Crop monitoring, etc using an android application.
                      </div>
                    </div>
                    <div id="tabtab" className="tab">
                      <input type="radio" id="rd13" name="rd" />
                      <label
                        id="tabtab-label"
                        className="tab-label"
                        htmlFor="rd13"
                      >
                        Problem Statement 3
                      </label>
                      <div id="tabtab-content" className="tab-content">
                        <strong>Smart Agro-logistics:</strong>
                        <ul>
                          Innovate the supply chain and agriculture logistics in different ways like:
                        </ul>
                        <li>
                          Using blockchain technology for traceability of agri-produce from Farm to Fork
                        </li>
                        <li>
                          Cost-effective sensor-based real-time monitoring & management of storage and transport system
                        </li>
                        <li>
                          IT-based agriculture logistics inclusion custom hiring services
                        </li>
                      </div>
                    </div>
                  </div>
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
                  <div id="tabstabs" className="tabs">
                    <div id="tabtab" className="tab">
                      <input type="radio" id="rd11" name="rd" />
                      <label
                        id="tabtab-label"
                        className="tab-label"
                        htmlFor="rd11"
                      >
                        Problem Statement 1
                      </label>
                      <div id="tabtab-content" className="tab-content">
                        <strong>Resilient Cities:</strong>
                        {' '}
                        To construct applications that can give data with respect to the city if there should be an occurrence of crisis to protect the general population.
                      </div>
                    </div>
                    <div id="tabtab" className="tab">
                      <input type="radio" id="rd12" name="rd" />
                      <label
                        id="tabtab-label"
                        className="tab-label"
                        htmlFor="rd12"
                      >
                        Problem Statement 2
                      </label>
                      <div id="tabtab-content" className="tab-content">
                        <strong>Innovative Governance:</strong>
                        {' '}
                        A platform for Governments to bring better services, Transparency, Accountability, and Data-driven decisions.
                      </div>
                    </div>
                    <div id="tabtab" className="tab">
                      <input type="radio" id="rd13" name="rd" />
                      <label
                        id="tabtab-label"
                        className="tab-label"
                        htmlFor="rd13"
                      >
                        Problem Statement 3
                      </label>
                      <div id="tabtab-content" className="tab-content">
                        <strong> Smart Transportation:</strong>
                        {' '}
                        Using digital tools and systems to improve and innovate the urban transportation experience, resolve traffic issues such as traffic jams, and reduce the number of accidents.
                      </div>
                    </div>
                  </div>
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
