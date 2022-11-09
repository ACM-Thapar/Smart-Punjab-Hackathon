import {Fragment} from 'react';
import AnimatedCursor from 'react-animated-cursor';
import './App.css';
import LandingPage from './Pages/LandingPage/LandingPage';
import Timeline from './Components/Timeline/Timeline';
import Tracks from './Components/Tracks/Tracks';
import Guidelines from './Components/Guidelines/Guidelines';
import ContactUs from './Components/ContactUs/ContactUs';
import Faqs from './Components/Faqs/Faqs';
import About from './Components/About/About';
import Prizes from './Components/Prizes/Prizes';

function App () {
  return (
    <Fragment>
      <AnimatedCursor
        innerSize={13}
        outerSize={13}
        color="255, 215, 0"
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
      <About />
      <Timeline />
      <Tracks />
      <Prizes />
      <Guidelines />
      <Faqs />
      <ContactUs />
    </Fragment>
  );
}

export default App;
