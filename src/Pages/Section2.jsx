import { React, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Section2Content from '../components/Section2Content';
import Contact from '../components/Contact';
import ScrollToTop from '../components/ScrollToTop';

const Section2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
        <ScrollToTop />
        <NavBar />
        <Section2Content />
        <Contact />
    </div>
  )
}

export default Section2;