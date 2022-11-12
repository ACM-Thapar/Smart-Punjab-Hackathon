import {React, Fragment} from 'react';
import {Fade} from 'react-reveal';
import './Sponsors.css';

function Sponsors () {
  return (
    <Fragment>
      <section id="sponsors">
        <div className="sponsors container-fluid justify-content-center p-5 m-0 row">
          <Fade>
            <h1>Sponsors</h1>
          </Fade>
        </div>
      </section>
    </Fragment>
  );
}

export default Sponsors;
