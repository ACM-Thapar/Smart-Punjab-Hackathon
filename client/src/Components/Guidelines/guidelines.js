import {React, Fragment} from 'react';
import Fade from 'react-reveal/Fade';
import './Guidelines.css';

function Guidelines () {
  return (
    <Fragment>
      <section id="rules">
        <div className="guidelines container-fluid m-0 p-5 justify-content-center">
          <Fade>
            <h1>Guidelines</h1>
          </Fade>
        </div>
      </section>
    </Fragment>
  );
}

export default Guidelines;
