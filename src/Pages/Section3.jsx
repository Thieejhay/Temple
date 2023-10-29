import { React, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Section3Content from '../components/Section3Content';
import Contact from '../components/Contact';

const Section3 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
        <NavBar />
        <Section3Content />
        <Contact />
    </div>
  )
}

export default Section3;