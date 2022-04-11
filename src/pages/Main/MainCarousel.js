import React, { useEffect, useRef, useState } from 'react';
import API from '../../config/config';
import './MainCarousel.scss';

const MainCarousel = ({ category }) => {
  const [slidePosition, setSlidePosition] = useState(0);
  const [slideData, setSlideData] = useState([]);
  const [showArrow, setShowArrow] = useState(false);

  const slideRef = useRef();
  const indicatorRef = useRef();

  let newSlidePosition = slidePosition;

  useEffect(() => {
    fetch(API.allProducts)
      .then(res => res.json())
      .then(data =>
        setSlideData(
          data.result.filter(
            product => product.category.categoryName === `${category}`
          )
        )
      );
  }, []);

  const prevSlideHandler = () => {
    if (newSlidePosition > 0) {
      newSlidePosition = newSlidePosition - 1;
    }
    let slideTranslation = newSlidePosition * -33;
    let indicatorTranslation =
      newSlidePosition * (200 / (slideData.length - 3));
    slideRef.current.style.transform = `translate(${slideTranslation}%)`;
    indicatorRef.current.style.transform = `translate(${indicatorTranslation}%)`;
    setSlidePosition(newSlidePosition);
  };

  const nextSlideHandler = () => {
    if (newSlidePosition < slideData.length - 3) {
      newSlidePosition = newSlidePosition + 1;
    }
    let slideTranslation = newSlidePosition * -33;
    let indicatorTranslation =
      newSlidePosition * (200 / (slideData.length - 3));
    slideRef.current.style.transform = `translate(${slideTranslation}%)`;
    indicatorRef.current.style.transform = `translate(${indicatorTranslation}%)`;
    setSlidePosition(newSlidePosition);
  };

  const arrowHandler = boolean => {
    setShowArrow(boolean);
  };

  return (
    <div
      className="mainCarousel"
      onMouseOver={() => arrowHandler(true)}
      onMouseLeave={() => arrowHandler(false)}
    >
      <div className="fixedScreen">
        <div ref={slideRef} className="carouselContainer">
          {slideData.map(({ id, url, productName, skin_type }) => (
            <div key={id} className="mainCarouselContainer">
              <div className="imageContainer">
                <img
                  className="mainCarouselImage"
                  src={url}
                  alt={productName}
                />
              </div>
              <div className="mainCarouselProductName">{productName}</div>
              <div className="mainCarouselProductDescription">{skin_type}</div>
            </div>
          ))}
        </div>
      </div>
      {showArrow && (
        <div className="leftArrowContainer" onClick={prevSlideHandler}>
          <img
            className="leftArrow"
            src="/images/main/leftarrow.png"
            alt="leftarrow"
          />
        </div>
      )}
      {showArrow && (
        <div className="rightArrowContainer" onClick={nextSlideHandler}>
          <img
            className="rightArrow"
            src="images/main/rightarrow.png"
            alt="rightarrow"
          />
        </div>
      )}
      <div className="indicator">
        <span ref={indicatorRef} className="indicatorBlock" />
      </div>
    </div>
  );
};

export default MainCarousel;
