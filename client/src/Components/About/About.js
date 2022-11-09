import {React, Fragment} from 'react';
import Fade from 'react-reveal/Fade';

function About () {
  return (
    <Fragment>
      <section id="about">
        <div className="about container-fluid justify-content-center p-5 m-0 row">
          <Fade>
            <h1>About</h1>
          </Fade>
        </div>
      </section>
    </Fragment>
  );
}

export default About;
