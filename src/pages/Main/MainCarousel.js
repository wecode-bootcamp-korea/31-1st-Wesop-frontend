import React, { useEffect, useRef, useState } from 'react';
import SLIDE_DATA from './SLIDE_DATA';
import './MainCarousel.scss';

const MainCarousel = () => {
  const [slidePosition, setSlidePosition] = useState(0);
  const [slideData, setSlideData] = useState([]);
  const [badgeData, setBadgeData] = useState([]);

  const slideRef = useRef();
  const indicatorRef = useRef();

  // useEffect(() => {
  //   fetch('http://10.58.2.50:8000/products')
  //     .then(res => res.json())
  //     .then(data => setSlideData(data));
  // }, []);

  // console.log(slideData);
  // console.log(slideData.filter(data => data.badge === '종환 MD 추천'));

  // useEffect(() => {
  //   setBadgeData(slideData.filter(data => data.badge.includes('종환')));
  // }, [slideData]);

  // console.log(badgeData);
  useEffect(() => {
    fetch('/data/dataSample.json')
      .then(res => res.json())
      .then(data => setSlideData(data));
    // .then(slideData => slideData.filter(slideData));
  }, []);

  let newSlidePosition = slidePosition;

  const prevSlideHandler = () => {
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
    if (newSlidePosition < SLIDE_DATA.length - 3) {
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
          {SLIDE_DATA.map(({ id, image, name, description }) => (
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
