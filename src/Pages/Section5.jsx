import { React, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Section5Content from '../components/Section5Content';
import Contact from '../components/Contact';
import ScrollToTop from '../components/ScrollToTop';

const Section5 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
        <ScrollToTop />
        <NavBar />
        <Section5Content />
        <Contact />
    </div>
  )
}

export default Section5;