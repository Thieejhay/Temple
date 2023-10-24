import React from 'react';
import NavBar from '../components/NavBar'
import HomeContent from '../components/HomeContent';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div>
        <NavBar />
        <HomeContent />
        <Contact />
    </div>
  )
}

export default Home;