import React from 'react';
import NavBar from '../components/NavBar'
import HomeContent from '../components/HomeContent';
import Contact from '../components/Contact';
import ScrollToTop from '../components/ScrollToTop';

const Home = () => {
  return (
    <div>
        <ScrollToTop />
        <NavBar />
        <HomeContent />
        <Contact />
    </div>
  )
}

export default Home;