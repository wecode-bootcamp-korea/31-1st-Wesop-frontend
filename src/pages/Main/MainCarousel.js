import React, { useRef, useState } from 'react';
import SlideData from './SlideData';
import './MainCarousel.scss';

const MainCarousel = () => {
  const [slidePosition, setSlidePosition] = useState(0);

  const slideRef = useRef();
  const indicatorRef = useRef();

  const prevSlideHandler = () => {
    let newSlidePosition = slidePosition;
    if (newSlidePosition > 0) {
      newSlidePosition = newSlidePosition - 1;
    }
    let slideTranslation = newSlidePosition * -33;
    let indicatorTranslation = newSlidePosition * 100;
    slideRef.current.style.transform = `translate(${slideTranslation}%)`;
    indicatorRef.current.style.transform = `translate(${indicatorTranslation}%)`;
    setSlidePosition(newSlidePosition);
  };

  const nextSlideHandler = () => {
    let newSlidePosition = slidePosition;
    if (newSlidePosition < SlideData.length - 3) {
      newSlidePosition = newSlidePosition + 1;
    }
    let slideTranslation = newSlidePosition * -33;
    let indicatorTranslation = newSlidePosition * 100;
    slideRef.current.style.transform = `translate(${slideTranslation}%)`;
    indicatorRef.current.style.transform = `translate(${indicatorTranslation}%)`;
    setSlidePosition(newSlidePosition);
  };

  return (
    <div className="MainCarousel">
      <div className="fixedScreen">
        <div ref={slideRef} className="carouselContainer">
          {SlideData.map(data => (
            <div key={data.id} className="mainCarouselContainer">
              <img
                className="mainCarouselImage"
                src={data.image}
                alt={data.name}
              />
              <div className="mainCarouselProductName">{data.name}</div>
              <div className="mainCarouselProductDescription">
                {data.description}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="leftArrowContainer" onClick={prevSlideHandler}>
        <img
          className="leftArrow"
          src="/images/main/leftarrow.png"
          alt="leftarrow"
        />
      </div>
      <div className="rightArrowContainer" onClick={nextSlideHandler}>
        <img
          className="rightArrow"
          src="images/main/rightarrow.png"
          alt="rightarrow"
        />
      </div>
      <div className="indicator">
        <span ref={indicatorRef} className="indicatorBlock" />
      </div>
    </div>
  );
};

export default MainCarousel;
