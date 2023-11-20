import React from 'react';
import NavBar from '../components/NavBar'
import ProgramsContent from '../components/ProgramsContent';
import Contact from '../components/Contact';
import ScrollToTop from '../components/ScrollToTop';

const Programs = () => {
  return (
    <div>
        <ScrollToTop />
        <NavBar />
        <ProgramsContent />
        <Contact />
    </div>
  )
}

export default Programs;