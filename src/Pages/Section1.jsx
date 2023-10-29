import { React, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Section1Content from '../components/Section1Content';
import Contact from '../components/Contact'

const Section1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
        <NavBar />
        <Section1Content />
        <Contact />
    </div>
  )
}

export default Section1;