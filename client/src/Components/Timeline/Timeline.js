import {React, Fragment} from 'react';
import './Timeline.css';
import TimelineImg from './../../Assets/Timeline.png';

function Timeline () {
  return (
    <Fragment>
      <div className="timeline container-fluid text-align-center py-5 justify-content-center row m-0">
        <h1>Timeline</h1>
        <img src={TimelineImg} alt="Timeline" className="img-fluid my-5" />
      </div>
    </Fragment>
  );
}

export default Timeline;
