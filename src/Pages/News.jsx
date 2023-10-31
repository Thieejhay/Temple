import { React, useEffect } from 'react'
import NavBar from '../components/NavBar';
import Contact from '../components/Contact';
import NewsContent from '../components/NewsContent';

const News = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
        <NavBar />
        <NewsContent />
        <Contact />
    </div>
  )
}

export default News;