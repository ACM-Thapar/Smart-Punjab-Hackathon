import {Fragment} from 'react';
import AnimatedCursor from 'react-animated-cursor';
import './App.css';
import LandingPage from './Pages/LandingPage/LandingPage';
import Timeline from './Components/Timeline/Timeline';
import Tracks from './Components/Tracks/Tracks';
import Guidelines from './Components/Guidelines/guidelines';
import Faqs from './Components/Guidelines/guidelines';
import ContactUs from './Components/ContactUs/ContactUs';

function App () {
  return (
    <Fragment>
      <AnimatedCursor
        innerSize={13}
        outerSize={13}
        color="57, 1, 123"
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={4}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',
        ]}
      />
      <LandingPage />
      <Timeline />
      <Tracks />
      <Guidelines />
      <Faqs />
      <ContactUs />
    </Fragment>
  );
}

export default App;
