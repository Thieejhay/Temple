import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const toggleVisibility = () => {
        if (window.scrollY > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener('scroll', toggleVisibility);
  
      return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
  return (
    <div className='fixed bottom-12 right-12 z-50'>
        {isVisible && (
        <button onClick={scrollToTop} className="flex flex-col gap-1 items-center bg-[#061c56] text-[#f6bc75] p-4">
          <FaArrowUp className='w-5 h-5'/>
          <span className='text-xs'>Back to top</span>
        </button>
      )}
    </div>
  )
}

export default ScrollToTop;