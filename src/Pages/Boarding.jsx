import React, {useEffect} from 'react';
import NavBar from '../components/NavBar'
import Contact from '../components/Contact'
import BoardingContent from '../components/BoardingContent';
import ScrollToTop from '../components/ScrollToTop';

const Boarding = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
        <ScrollToTop />
        <NavBar />
        <BoardingContent />
        <Contact />
    </div>
  )
}

export default Boarding;