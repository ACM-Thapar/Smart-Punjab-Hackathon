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
            <p className ="col-8">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta porro excepturi, laborum qui minus dolor error facilis deleniti, velit eaque consequatur! Pariatur repellat ad quae suscipit cumque a quis error unde neque nihil earum sequi sint similique, tempora officia at nam. Accusamus reiciendis ut sequi quidem vitae reprehenderit optio eos voluptatibus iure impedit minima dolores eveniet sunt quia alias ratione nam veritatis rerum, saepe voluptates ullam labore officia iusto!
            </p>
          </Fade>
        </div>
      </section>
    </Fragment>
  );
}

export default About;
