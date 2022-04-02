import React from 'react';
import Nav from '../../components/Nav/Nav';
import MainVideo from './MainVideo';
import MainCarousel from './MainCarousel';
import MainPopupSlide from './MainPopupSlide';
import MainQuote from './MainQuote';
import Footer from '../../components/Footer/Footer';
import './Main.scss';

const Main = () => {
  return (
    <div className="Main">
      <Nav />
      <MainVideo />
      <MainCarousel />
      <div className="MainVitamin">a</div>
      <MainPopupSlide />
      <div className="MainSecondSlide">a</div>
      <MainQuote />
      <Footer />
    </div>
  );
};

export default Main;
