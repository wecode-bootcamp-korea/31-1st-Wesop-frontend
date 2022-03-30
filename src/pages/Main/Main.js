import React from 'react';
import MainVideo from './MainVideo';
import MainCarousel from './MainCarousel';
import SlideData from './SlideData';
import './Main.scss';

const Main = () => {
  return (
    <div className="Main">
      <MainVideo />
      <MainCarousel>
        {SlideData.map(data => (
          <div key={data.id} className="carouselContainer">
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
      </MainCarousel>
      <div className="MainVitamin">a</div>
      <div className="MainShampooIntro">a</div>
      <div className="MainShampooModal">a</div>
      <div className="MainSecondSlide">a</div>
      <div className="MainQuote">a</div>
    </div>
  );
};

export default Main;
