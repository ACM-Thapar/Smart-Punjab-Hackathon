import {React, Fragment} from 'react';
import Fade from 'react-reveal/Fade';
import './Faqs.css';

function Faqs () {
  return (
    <Fragment>
      <section id="faqs">
        <div className=" faqs container-fluid justify-content-center p-5 m-0 row">
          <Fade>
            <h1>Faqs</h1>
          </Fade>
        </div>
      </section>
    </Fragment>
  );
}

export default Faqs;
