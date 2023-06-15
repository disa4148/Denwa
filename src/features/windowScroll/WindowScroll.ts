import { useEffect } from 'react';

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
      }, 10);
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default WindowScroll;
