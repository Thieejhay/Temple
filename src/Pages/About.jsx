import React from 'react'
import NavBar from '../components/NavBar';
import AboutContent from '../components/AboutContent';
import Contact from '../components/Contact';
import ScrollToTop from '../components/ScrollToTop';

const About = () => {
  return (
    <div>
        <ScrollToTop />
        <NavBar />
        <AboutContent />
        <Contact />
    </div>
  )
}

export default About;