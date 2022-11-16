import { React, Fragment } from 'react';
import Fade from 'react-reveal';
import './Prizes.css';
import { Bounce } from 'react-reveal';
import first from '../../Assets/first.png';
import second from '../../Assets/second.png';
import third from '../../Assets/third.png';

function Prizes() {
    return (
        <Fragment>
            <section id="prizes">
                <div className="prizes container-fluid justify-content-center p-5 m-0 row">
                    <Fade>
                        <h1>Prizes</h1>
                        <div
                            id="PrizeBox"
                            className="PrizeBox col-11 p-5 row justify-content-center"
                        >
                          <div className="Prize col-12 col-md-4 p-5" id="firstprize">
                            
                                <img
                                    src={first}
                                    alt="first"
                                    className="col-8"
                                ></img>
                                <p>Lorem Ipsum</p>
                            </div>
                          
                            <Bounce left>
                                <div className="Prize col-12 col-md-4 p-5" id="secondprize">
                              
                                    <img
                                        src={second}
                                        alt="second"
                                        className="col-8"
                                    ></img>
                                    <p>Lorem Ipsum</p>
                                </div>
                                
                            </Bounce>
                            <Bounce right>
                                <div className=" Prize col-12 col-md-4 p-5" id="thirdprize">
                                
                                    <img
                                        src={third}
                                        alt="third"
                                        className="col-8"
                                    ></img>
                                    <p>Lorem Ipsum</p>
                                </div>
                                
                            </Bounce>
                        </div>
                    </Fade>
                </div>
            </section>
        </Fragment>
    );
}

export default Prizes;
