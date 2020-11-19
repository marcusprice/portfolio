import { useState, useEffect } from 'react';

//returns windows size on resize
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(0);

  const handleResize = () => {
    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    if (windowSize === 0) {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowSize, handleResize]);

  return windowSize;
};
