import {React, Fragment} from 'react';
import Fade from 'react-reveal/Fade';
import './faqs.css';

function Faqs () {
  return (
    <Fragment>
      <section id="faqs">
        <div className=" faqs container-fluid justify-content-center p-5 m-0 row text-align-center">
          <Fade>
            <div className="accordion col-11 m-0 p-0 text-align-center">
              <h1 className="mb-5 text-align-center">Faqs</h1>
              <div className="col">
                <div className="tabs">
                  <div className="tab">
                    <input type="radio" id="rd1" name="rd" />
                    <label className="tab-label" htmlFor="rd1">Item 1</label>
                    <div className="tab-content">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, facilis.
                    </div>
                  </div>
                  <div className="tab">
                    <input type="radio" id="rd2" name="rd" />
                    <label className="tab-label" htmlFor="rd2">Item 2</label>
                    <div className="tab-content">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, aut.
                    </div>
                  </div>
                  <div className="tab">
                    <input type="radio" id="rd3" name="rd" />
                    <label className="tab-label" htmlFor="rd3">Item 3</label>
                    <div className="tab-content">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, facilis.
                    </div>
                  </div>
                  <div className="tab">
                    <input type="radio" id="rd4" name="rd" />
                    <label className="tab-label" htmlFor="rd4">Item 4</label>
                    <div className="tab-content">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, facilis.
                    </div>
                  </div>
                  <div className="tab">
                    <input type="radio" id="rd5" name="rd" />
                    <label className="tab-label" htmlFor="rd5">Item 5</label>
                    <div className="tab-content">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, facilis.
                    </div>
                  </div>
                  <div className="tab">
                    <input type="radio" id="rd6" name="rd" />
                    <label className="tab-label" htmlFor="rd6">Item 6</label>
                    <div className="tab-content">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, facilis.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </section>
    </Fragment>
  );
}

export default Faqs;
