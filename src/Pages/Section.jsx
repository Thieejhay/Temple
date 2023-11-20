import React from 'react';
import NavBar from '../components/NavBar';
import Contact from '../components/Contact';
import SectionContent from '../components/SectionContent';
import { useEffect } from 'react';
import ScrollToTop from '../components/ScrollToTop';

const Section = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
        <ScrollToTop />
        <NavBar />
        <SectionContent />
        <Contact />
    </div>
  )
}

export default Section;