import {React, Fragment} from 'react';
import './ContactUs.css';
import Fade from 'react-reveal/Fade';

function ContactUs () {
  return (
    <Fragment>
      <section id="contactUs">
        <div className="contactUs container-fluid justify-content-center p-5 m-0 row">
          {/* <div className="animate col-6">
            <Fade>
              <div>if you still have any</div>
            </Fade>
            <Fade>
              <div>if you still have any</div>
            </Fade>
            <Fade>
              <div>if you still have any</div>
            </Fade>
            <Fade>
              <div>if you still have any query</div>
            </Fade>
          </div> */}
          <Fade>
            <h1>Contact Us</h1>
          </Fade>
        </div>
      </section>
    </Fragment>
  );
}

export default ContactUs;
