import {React, Fragment} from 'react';
import './ContactUs.css';
import Fade from 'react-reveal/Fade';
import fb from '../../Assets/fb.png';
import insta from '../../Assets/insta.png';
import discord from '../../Assets/discord.png';
import youtube from '../../Assets/youtube.png';
import Union from '../../Assets/Union.png';
import Bounce from 'react-reveal/Bounce';

function ContactUs () {
  return (
    <Fragment>
      <section id="contactUs">
        <div className="contactUs container-fluid justify-content-center p-5 m-0 row">
          <Fade>
            <h1 className="mb-4">Contact Us</h1>
            <div className=" mainpart col-10 row justify-content-between p-0 m-0">
              <Bounce left>
                <img
                  src={Union}
                  alt="union"
                  className=" union col-9 col-md-5 my-2 mt-5 mb-md-5"
                />
              </Bounce>
              <Bounce right>
                <div className="contact-box col-11 py-2 col-md-5 mb-5 mt-3">
                  <div className="contact">
                    <span>Arushi Garg</span>
                    <span>✉️agarg5_be20@thapar.edu</span>
                    <span> 📞6283108001</span>
                  </div>
                  <div className="contact">
                    <span>Rohan Gupta</span>
                    <span>✉️rgupta6_be20@thapar.edu</span>
                    <span> 📞93058 95903</span>
                  </div>
                  <div className="contact">
                    <span>Samik Malhotra</span>
                    <span>✉️smalhotra2_be20@thapar.edu</span>
                    <span>📞8920321607</span>
                  </div>
                  <div className="socials">
                    <a href="https://www.facebook.com/saturnalia.thapar/">
                      <img src={fb} />
                    </a>
                    <a href="https://www.instagram.com/saturnalia.thapar/?hl=en">
                      <img src={insta} />
                    </a>
                    <a href="https://discord.gg/chbqhsgYNd">
                      <img src={discord} />
                    </a>
                    <a href="https://www.youtube.com/channel/UCZv84Q5t_ESkpSnNlt5H0lg">
                      <img src={youtube} />
                    </a>
                  </div>
                  <div id="idk" className="col-5">
                    <div className="venue">
                      <span>📍Venue</span>
                    </div>
                  </div>

                </div>
              </Bounce>
            </div>
          </Fade>
        </div>
      </section>
    </Fragment>
  );
}

export default ContactUs;
