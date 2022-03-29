import React from 'react';
import FooterGrid from './FooterGrid';
import FooterBanner from './FooterBanner';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="Footer">
      <FooterGrid />
      <FooterBanner />
    </div>
  );
};

export default Footer;
