import { React, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Contact from '../components/Contact';
import Section4Content from '../components/Section4Content';
import ScrollToTop from '../components/ScrollToTop';

const Section4 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
        <ScrollToTop />
        <NavBar />
        <Section4Content />
        <Contact />
    </div>
  )
}

export default Section4;