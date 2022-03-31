import React, { useState } from 'react';
import SlideData from './SlideData';
import './MainCarousel.scss';

let widthSpan = 100;

const MainCarousel = () => {
  const [slidePosition, setSlidePosition] = useState(0);

  const prevSlideHandler = () => {
    let newPosition = slidePosition;
    if (newPosition > 0) {
      newPosition = newPosition - 1;
    }
    translateFullSlides(newPosition);
    setSlidePosition(newPosition);
  };

  const nextSlideHandler = () => {
    let newPosition = slidePosition;
    if (newPosition < SlideData.length - 1) {
      newPosition = newPosition + 1;
    }
    translateFullSlides(newPosition);
    setSlidePosition(newPosition);
  };

  const translateFullSlides = newPosition => {
    let toTranslate = -widthSpan * newPosition;
  };

  return (
    <div className="MainCarousel">
      <div className="carouselContainer">
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
      <div className="leftArrowContainer">
        <img
          className="leftArrow"
          src="/images/main/leftarrow.png"
          alt="leftarrow"
        />
      </div>
      <div className="rightArrowContainer">
        <img
          className="rightArrow"
          src="images/main/rightarrow.png"
          alt="rightarrow"
        />
      </div>
    </div>
  );
};

export default MainCarousel;
