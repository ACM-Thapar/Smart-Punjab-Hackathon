import {React, Fragment} from 'react';
import Fade from 'react-reveal/Fade';
import './Timeline.css';
import TimelineImg from './../../Assets/Timeline.png';

function Timeline () {
  return (
    <Fragment>
      <section id="timeline">
        <div className="timeline container-fluid py-5 justify-content-center row m-0 p-5 row">
          <Fade>
            <h1>Timeline</h1>
            {/* 
            <img
              src={TimelineImg}
              alt="Timeline"
              className="img-fluid my-5"
              draggable="false"
            /> */}
          </Fade>
        </div>
      </section>
    </Fragment>
  );
}

export default Timeline;
