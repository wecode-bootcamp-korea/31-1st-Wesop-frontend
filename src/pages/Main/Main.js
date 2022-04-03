import React from 'react';
import Nav from '../../components/Nav/Nav';
import MainVideo from './MainVideo';
import MainCarousel from './MainCarousel';
import VitaminBaseData from './VitaminBaseData';
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
        subtitle={VitaminBaseData[0].subtitle}
        title={VitaminBaseData[0].title}
        description={VitaminBaseData[0].description}
        btnText={VitaminBaseData[0].btnText}
        imgSrc={VitaminBaseData[0].imgSrc}
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
