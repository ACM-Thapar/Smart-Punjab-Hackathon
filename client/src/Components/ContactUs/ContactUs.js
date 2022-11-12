import {React, Fragment} from 'react';
import './ContactUs.css';
import Fade from 'react-reveal/Fade';
import {Bounce} from 'react-reveal';

function ContactUs () {
  return (
    <Fragment>
      <section id="contactUs">
        <div className="contactUs container-fluid justify-content-center p-5 m-0 row">
          <div className="animate col-6">
            <Bounce left>
              <div>if you still have any</div>
            </Bounce>
            <Bounce right>
              <div>if you still have any</div>
            </Bounce>
            <Bounce left>
              <div>if you still have any</div>
            </Bounce>
            <Bounce right>
              <div>if you still have any query</div>
            </Bounce>
          </div>
          <Fade>
            <h1>Contact Us</h1>
          </Fade>
        </div>
      </section>
    </Fragment>
  );
}

export default ContactUs;
