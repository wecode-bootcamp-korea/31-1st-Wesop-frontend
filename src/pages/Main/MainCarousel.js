import React from 'react';
import './MainCarousel.scss';

const MainCarousel = ({ children }) => {
  console.log(children);
  return (
    <div className="MainCarousel">
      <div className="carouselContainer">{children}</div>
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
