import React from 'react';
import NavBar from '../components/NavBar';
import Contact from '../components/Contact';
import SectionContent from '../components/SectionContent';
import { useEffect } from 'react';

const Section = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
        <NavBar />
        <SectionContent />
        <Contact />
    </div>
  )
}

export default Section;