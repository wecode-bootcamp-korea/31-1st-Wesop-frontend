import React from 'react';
import Nav from '../../components/Nav/Nav';
import MainVideo from './MainVideo';
import MainCarousel from './MainCarousel';
import VITAMIN_DATA from './VITAMIN_DATA';
import BaseInfo from '../../components/BaseInfo/BaseInfo';
import MainPopupSlide from './MainPopupSlide/MainPopupSlide';
import Selection from './Selection';
import MainStoreLocator from './MainStoreLocator';
import MainQuote from './MainQuote';
import Footer from '../../components/Footer/Footer';
import './Main.scss';

const Main = () => {
  return (
    <div className="Main">
      <Nav />
      <MainVideo />
      <MainCarousel />
      <BaseInfo
        subtitle={VITAMIN_DATA[0].subtitle}
        title={VITAMIN_DATA[0].title}
        description={VITAMIN_DATA[0].description}
        btnText={VITAMIN_DATA[0].btnText}
        imgSrc={VITAMIN_DATA[0].imgSrc}
      />
      <MainPopupSlide />
      <Selection />
      {/* <MainCarousel /> */}
      <MainStoreLocator />
      <MainQuote />
      <Footer />
    </div>
  );
};

export default Main;
