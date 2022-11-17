import {Fragment, useState, useEffect} from 'react';
import AnimatedCursor from 'react-animated-cursor';
import './App.css';
import LandingPage from './Pages/LandingPage/LandingPage';
import Timeline from './Components/Timeline/Timeline';
import Tracks from './Components/Tracks/Tracks';
import ContactUs from './Components/ContactUs/ContactUs';
import Faqs from './Components/Faqs/faqs';
import About from './Components/About/About';
import Prizes from './Components/Prizes/Prizes';
import Sponsors from './Components/Sponsors/Sponsors';
import ScrollButton from './Components/ScrollButton/Scrollbutton';
import Modal from 'react-modal/lib/components/Modal';
import Loader from './Components/Loader/Loader';

Modal.setAppElement ('#root');
function App () {
  const [isLoading, setIsLoading] = useState (true);
  useEffect (() => {
    setTimeout (() => {
      setIsLoading (false);
    }, 5000);
    // eslint-disable-next-line
  }, []);

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
      {isLoading
        ? <Loader />
        : <div>
            <LandingPage />
            <About />
            <Timeline />
            <Tracks />
            <Prizes />
            <Sponsors />
            <Faqs />
            <ContactUs />
            <ScrollButton />
          </div>}
    </Fragment>
  );
}

export default App;
