import React from 'react';
import MainVideo from './MainVideo';
import MainCarousel from './MainCarousel';
import './Main.scss';
import Footer from '../../components/Footer/Footer';

const Main = () => {
  return (
    <div className="Main">
      <MainVideo />
      <MainCarousel />
      <div className="MainVitamin">a</div>
      <div className="MainShampooIntro">a</div>
      <div className="MainShampooModal">a</div>
      <div className="MainSecondSlide">a</div>
      <div className="MainQuote">a</div>
      <Footer />
    </div>
  );
};

export default Main;
