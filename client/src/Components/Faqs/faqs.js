import {React, Fragment} from 'react';
import Fade from 'react-reveal/Fade';
import './faqs.css';

function Faqs () {
  return (
    <Fragment>
      <section id="faqs">
        <div className=" faqs container-fluid justify-content-center py-5 m-0 row text-align-center">
          <Fade>
            <div className="accordion col-11 m-0 p-0 text-align-center">
              <h1 className="mb-5 text-align-center">Faqs</h1>
              <div className="justify-content-center row">
                <div className="tabs col-12">
                  <div className="tab">
                    <input type="radio" id="rd1" name="rd" />
                    <label className="tab-label" htmlFor="rd1">
                      What is the mode of the event
                    </label>
                    <div className="tab-content">
                      Smart Punjab Hack is planned in offline mode though students from any can college can apply for it if they can come at the venue
                    </div>
                  </div>
                  <div className="tab">
                    <input type="radio" id="rd2" name="rd" />
                    <label className="tab-label" htmlFor="rd2">
                      Who can attend this Hackathon
                    </label>
                    <div className="tab-content">
                      Our Hack is open to all undergraduate and high school students around the world. There is no prerequisite for the participants. We hope to keep the hackathon beginner-friendly so that everyone can learn something from this hackathon.
                    </div>
                  </div>
                  <div className="tab">
                    <input type="radio" id="rd3" name="rd" />
                    <label className="tab-label" htmlFor="rd3">
                      What is the allowed team size and how can I find one ?
                    </label>
                    <div className="tab-content">
                      The time size can vary from 2-5 participants but we hope you will try actively looking for a team because working in groups is a great skill for developers. Looking for team members? Head over to #team-building channel on our discord server and try your luck!
                    </div>
                  </div>
                  <div className="tab">
                    <input type="radio" id="rd4" name="rd" />
                    <label className="tab-label" htmlFor="rd4">
                      Do I need to pay any registration fee to register for the it?
                    </label>
                    <div className="tab-content">
                      No, its free of cost.
                    </div>
                  </div>
                  <div className="tab">
                    <input type="radio" id="rd5" name="rd" />
                    <label className="tab-label" htmlFor="rd5">
                      Do I need any prior Experience?
                    </label>
                    <div className="tab-content">
                      No, you do not need any prior development experience. We will assign you mentors to assist you in figuring things out. Of course, willingness to think, learn, and cooperate is a cherry on the top.
                    </div>
                  </div>
                  <div className="tab">
                    <input type="radio" id="rd6" name="rd" />
                    <label className="tab-label" htmlFor="rd6">
                      My doubt is not listed here
                    </label>
                    <div className="tab-content">
                      If you have any more questions, feel free to reach out to us at
                      {' '}
                      <a href="mailto: acmthaparchapter@thapar.edu">
                        acmthaparchapter@thapar.edu
                      </a>
                      {' '}
                      and we will try to respond as quickly as we can.
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
