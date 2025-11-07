import { useState, useEffect, useRef } from 'react';
import carousel1 from '../assets/carousel1.jpg';
import carousel2 from '../assets/carousel2.jpg';
import carousel3 from '../assets/carousel3.jpg';
import './Carousel.css';

const IMAGES = [
  { src: carousel1, alt: 'Cherries on tree' },
  { src: carousel2, alt: 'Fresh cherry bowl' },
  { src: carousel3, alt: 'Cherry dessert' }
];

function Carousel() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setIndex((i) => (i + 1) % IMAGES.length);
      }, 4000); 
    }
    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  const goTo = (i) => setIndex(i);

  return (
    <div
      role="region"
      aria-label="Cherry image carousel"
      className="carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="carousel-slide"
        role="group"
        aria-roledescription="slide"
        aria-label={`Slide ${index + 1} of ${IMAGES.length}`}
      >
        <img
          src={IMAGES[index].src}
          alt={IMAGES[index].alt}
          tabIndex="0"
          className="carousel-img"
        />

        <div className="carousel-dots">
          {IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={index === i}
              className={`dot-button ${index === i ? 'active' : ''}`}
            >
              ●
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
