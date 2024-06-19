import { useState, useEffect } from 'react';

const useScrollPosition = () => {
  const [position, setPosition] = useState({ atTop: true, atBottom: false });
  const tolerance = 200; // Tolerance in pixels from the actual top or bottom

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;

      const atTop = scrollTop < tolerance;
      const atBottom = (scrollTop + viewportHeight + tolerance) >= totalHeight;

      setPosition({ atTop, atBottom });
    };

    // Initial check and setup event listeners
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);
  return position;
};

export default useScrollPosition;
