import React from 'react';
import Nav from '../../components/Nav/Nav';
import MainVideo from './MainVideo';
import MainCarousel from './MainCarousel';
import BaseInfo from '../../components/BaseInfo/BaseInfo';
import MainPopupSlide from './MainPopupSlide/MainPopupSlide';
import Selection from './Selection';
import MainStoreLocator from './MainStoreLocator';
import MainQuote from './MainQuote';
import Footer from '../../components/Footer/Footer';
import VITAMIN_DATA from './VITAMIN_DATA';
import './Main.scss';

const Main = () => {
  const { subtitle, title, description, btnText, imgSrc } = VITAMIN_DATA[0];
  return (
    <div className="Main">
      <Nav />
      <MainVideo />
      <MainCarousel />
      <BaseInfo
        subtitle={subtitle}
        title={title}
        description={description}
        btnText={btnText}
        imgSrc={imgSrc}
      />
      <MainPopupSlide />
      <Selection />
      <MainStoreLocator />
      <MainQuote />
      <Footer />
    </div>
  );
};

export default Main;
