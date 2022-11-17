import {React, Fragment} from 'react';
import './Loader.css';

function Loader () {
  return (
    <Fragment>
      <div className="loader">
        <div className="circle">
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
        <div className="big">
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
        <div className="tri" />
        <div className="squ">
          <div />
          <div />
          <div />
          <div />
        </div>
        <div className="end">
          <div>E</div>
          <div>N</div>
          <div>D</div>
        </div>
      </div>
    </Fragment>
  );
}

export default Loader;
