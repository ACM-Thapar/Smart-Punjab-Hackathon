import {React, Fragment} from 'react';
import Fade from 'react-reveal/Fade';
import './Tracks.css';

function Tracks () {
  return (
    <Fragment>
      <section id="tracks">
        <div className="tracks container-fluid p-5 m-0 row justify-content-center">
          <Fade>
            <h1>Tracks</h1>

            {/* Card 1 */}
            <div className="card col-3 m-3 p-3 ">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body text-align-center justify-content-center row">
                <p className="card-title text-center">
                  Agritech
                </p>

                <button
                  type="button"
                  className="btn-light text-align-center"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Problem Statement
                </button>

              </div>
            </div>

            <div
              className="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex={-1}
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">

                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">
                      Problem Statements
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    ...
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}

            <div className="card col-3 m-3 p-3">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-title text-center">
                  Automation
                </p>
              </div>
            </div>

            <div className="card col-3 m-3 p-3">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-title text-center">
                  Smart Cities
                </p>
              </div>
            </div>

            <div className="card col-3 m-3 p-3">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-title text-center">
                  Madtech
                </p>
              </div>
            </div>

            <div className="card col-3 m-3 p-3">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-title text-center">
                  Open Innovation
                </p>
              </div>
            </div>

          </Fade>
        </div>
      </section>
    </Fragment>
  );
}

export default Tracks;
