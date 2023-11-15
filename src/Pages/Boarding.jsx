import React from 'react';
import NavBar from '../components/NavBar'
import Contact from '../components/Contact'
import BoardingContent from '../components/BoardingContent';

const Boarding = () => {
  return (
    <div>
        <NavBar />
        <BoardingContent />
        <Contact />
    </div>
  )
}

export default Boarding;