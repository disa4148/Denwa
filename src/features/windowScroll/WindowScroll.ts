import React, { useEffect } from 'react';

const WindowScroll = () => {
  let isScrolling = false;

  const handleScroll = (event: WheelEvent) => {
    event.preventDefault();

    if (!isScrolling) {
      isScrolling = true;

      const deltaY = Math.sign(event.deltaY);
      const nextScrollPosition = window.scrollY + window.innerHeight * deltaY;

      window.scrollTo({
        top: nextScrollPosition,
        behavior: 'smooth',
      });

      setTimeout(() => {
        isScrolling = false;
      }, 5); // Задержка в 1 секунду между прокрутками
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return null;
};

export default WindowScroll;
