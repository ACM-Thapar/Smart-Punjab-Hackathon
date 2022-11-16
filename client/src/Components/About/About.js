import {React, Fragment} from 'react';
import Fade from 'react-reveal/Fade';
import './About.css';

function About () {
  return (
    <Fragment>
      <section id="about">
        <div className="about container-fluid justify-content-center p-5 m-0 row">
          <Fade>
            <h1>About</h1>
            <div className="box"> </div>
            <p className="col-8" id="para">
              The SmartPunjab Hackathon is a platform
              for youth to ideate,
              design, execute and lead social initiatives that address
              issues in the community through collaborative leadership.
              <br /><br />
              Through this 24 - hour hackathon, students will be guided
              through an amazing learning experience and provided with
              resources and community support, including mentorship
              and prizes to launch a social change project in the
              community, along with stories that celebrate their journey
              and impact.
              <br /><br />
              There will be 60 teams who will be participating
              for the prize
              with one screening round, two checkpoints and the final
              judging round.
            </p>
          </Fade>
        </div>
      </section>
    </Fragment>
  );
}

export default About;
