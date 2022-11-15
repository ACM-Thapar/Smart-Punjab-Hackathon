import { React, Fragment } from 'react';
import './ContactUs.css';
import Fade from 'react-reveal/Fade';
import fb from '../../Assets/fb.png';
import insta from '../../Assets/insta.png';
import discord from '../../Assets/discord.png';
import youtube from '../../Assets/youtube.png';

function ContactUs() {
    return (
        <Fragment>
            <section id="contactUs">
                <div className="contactUs container-fluid justify-content-center p-5 m-0 row">
                    <Fade>
                        <h1>Contact Us</h1>
                        <div className="col-10 row justify-content-center m-0 p-0">
                            <div className="contact-box">
                                <div className="contact">
                                    <span>Samik Malhotra</span>
                                    <span>✉️ smalhotra2_be21@thapar.edu</span>
                                    <span>📞 8920321607</span>
                                </div>
                                <div className="contact">
                                    <span>Rohan Bhaiya</span>
                                    <span>✉️ rohanbhaiya@gmail.com</span>
                                    <span>📞 8920321607</span>
                                </div>
                                <div className="socials">
                                    <a href="https://www.facebook.com/saturnalia.thapar/">
                                        <img src={fb}></img>
                                    </a>
                                    <a href="https://www.instagram.com/saturnalia.thapar/?hl=en">
                                        <img src={insta}></img>
                                    </a>
                                    <a href="https://discord.gg/chbqhsgYNd">
                                        <img src={discord}></img>
                                    </a>
                                    <a href="https://www.youtube.com/channel/UCZv84Q5t_ESkpSnNlt5H0lg">
                                        <img src={youtube}></img>
                                    </a>
                                </div>
                                <div id="idk" className="col-5">
                                  <div className="venue">
                                  <span>📍Venue</span>
                                  </div>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </section>
        </Fragment>
    );
}

export default ContactUs;
