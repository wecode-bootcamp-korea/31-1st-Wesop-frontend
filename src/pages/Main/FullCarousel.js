import React, { useRef, useState } from 'react';
import STORE_DATA from './STORE_DATA';
import './FullCarousel.scss';

const FullCarousel = () => {
  const [slidePosition, setSlidePosition] = useState(0);
  const slideRef = useRef();

  let newSlidePosition = slidePosition;

  const prevSlideHandler = () => {
    if (newSlidePosition > 0) {
      newSlidePosition = newSlidePosition - 1;
    } else if (newSlidePosition === 0) {
      newSlidePosition = STORE_DATA.length - 1;
    }
    let slideTranslation = newSlidePosition * -34;
    slideRef.current.style.transform = `translate(${slideTranslation}%)`;
    setSlidePosition(newSlidePosition);
  };

  const nextSlideHandler = () => {
    if (newSlidePosition < STORE_DATA.length - 1) {
      newSlidePosition = newSlidePosition + 1;
    } else if (newSlidePosition === STORE_DATA.length - 1) {
      newSlidePosition = 0;
    }
    let slideTranslation = newSlidePosition * -34;
    slideRef.current.style.transform = `translate(${slideTranslation}%)`;
    setSlidePosition(newSlidePosition);
  };

  return (
    <div className="FullCarousel">
      <div className="fixedScreen">
        <div ref={slideRef} className="carouselContainer">
          {STORE_DATA.map(({ id, image, location }) => (
            <div key={id} className="mainCarouselContainer">
              <img className="mainCarouselImage" src={image} alt={location} />
            </div>
          ))}
        </div>
      </div>
      <div className="leftArrowContainer" onClick={prevSlideHandler}>
        <div className="arrowContainer">
          <img
            className="leftArrow"
            src="/images/main/leftarrow.png"
            alt="leftarrow"
          />
        </div>
      </div>
      <div className="rightArrowContainer" onClick={nextSlideHandler}>
        <div className="arrowContainer">
          <img
            className="rightArrow"
            src="images/main/rightarrow.png"
            alt="rightarrow"
          />
        </div>
      </div>
    </div>
  );
};

export default FullCarousel;
