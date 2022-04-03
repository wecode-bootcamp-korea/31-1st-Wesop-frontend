import React, { useEffect, useRef, useState } from 'react';
import SlideData from './SlideData';
import './MainCarousel.scss';

const MainCarousel = () => {
  const [slidePosition, setSlidePosition] = useState(0);
  const [slideData, setSlideData] = useState([]);

  const slideRef = useRef();
  const indicatorRef = useRef();

  const badgeData = slideData.filter(function (list) {
    return list.badge.includes('종환');
  });

  const sliceData = badgeData.slice(0, 5);

  console.log(sliceData);
  // useEffect(() => {
  //   fetch('http://10.58.1.137/products')
  //     .then(res => res.json())
  //     .then(data => console.log(data));
  // }, []);

  useEffect(() => {
    fetch('/data/dataSample.json')
      .then(res => res.json())
      .then(data => setSlideData(data));
    // .then(slideData => slideData.filter(slideData));
  }, []);

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
          {SlideData.map(({ id, image, name, description }) => (
            <div key={id} className="mainCarouselContainer">
              <img className="mainCarouselImage" src={image} alt={name} />
              <div className="mainCarouselProductName">{name}</div>
              <div className="mainCarouselProductDescription">
                {description}
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
