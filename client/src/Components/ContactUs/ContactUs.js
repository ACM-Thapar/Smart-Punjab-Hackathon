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
        <div className="contactUs container-fluid justify-content-center p-0 py-5 m-0 row">
          <Fade>
            <h1 className="mb-4">Contact Us</h1>
            <div className=" mainpart col-10 row justify-content-space evenly p-0 m-0">
              <Bounce left>
                <img
                  src={Union}
                  alt="union"
                  className=" union col-9 col-md-10"
                />
              </Bounce>
              <Bounce right>
                <div className="contact-box col-10 col-md-5">
                  <div className="contact">
                    <span>Samik Malhotra</span>
                    <span>✉️ smalhotra2_be21@thapar.edu</span>
                    <span>📞 8920321607</span>
                  </div>
                  <div className="contact">
                    <span>Rohan</span>
                    <span>✉️ rohan_be21@thapar.edu</span>
                    <span> 📞 9305895903 </span>
                  </div>
                  <div className="socials">
                    <a href="https://www.facebook.com/saturnalia.thapar/">
                      <img src={fb} alt="Facebook" />
                    </a>
                    <a href="https://www.instagram.com/saturnalia.thapar/?hl=en">
                      <img src={insta} alt="Instagram" />
                    </a>
                    <a href="https://discord.gg/chbqhsgYNd">
                      <img src={discord} alt="Discord" />
                    </a>
                    <a href="https://www.youtube.com/channel/UCZv84Q5t_ESkpSnNlt5H0lg">
                      <img src={youtube} alt="Youtube" />
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
