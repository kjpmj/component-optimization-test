import { useState, useEffect } from 'react';

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    console.log('mount');
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      console.log('unmount');
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowWidth;
}

export default useWindowWidth;
