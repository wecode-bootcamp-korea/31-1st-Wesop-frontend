import React, { useRef, useState } from 'react';
import StoreLocationData from './StoreLocationData';
import './FullCarousel.scss';

const FullCarousel = () => {
  const [slidePosition, setSlidePosition] = useState(0);

  const slideRef = useRef();

  const prevSlideHandler = () => {
    let newSlidePosition = slidePosition;
    if (newSlidePosition > 0) {
      newSlidePosition = newSlidePosition - 1;
    } else if (newSlidePosition === 0) {
      newSlidePosition = StoreLocationData.length - 1;
    }
    let slideTranslation = newSlidePosition * -34;
    slideRef.current.style.transform = `translate(${slideTranslation}%)`;
    setSlidePosition(newSlidePosition);
  };

  const nextSlideHandler = () => {
    let newSlidePosition = slidePosition;
    if (newSlidePosition < StoreLocationData.length - 1) {
      newSlidePosition = newSlidePosition + 1;
    } else if (newSlidePosition === StoreLocationData.length - 1) {
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
          {StoreLocationData.map(({ id, image, location }) => (
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
