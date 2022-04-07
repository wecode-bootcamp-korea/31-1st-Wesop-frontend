import React from 'react';
import MenuCategory from './MenuCategory';
import './NavMenu.scss';

const NavMenu = ({ menuHandler }) => {
  return (
    <div className="NavMenu">
      <div className="menuLogo">
        <img className="logoImage" src="/images/common/Wesop.png" alt="로고" />
      </div>
      <MenuCategory menuHandler={menuHandler} />
      <div className="imageContainer">
        <img
          className="menuImage"
          src="/images/common/MenuImage.jpg"
          alt="메뉴"
        />
      </div>
    </div>
  );
};

export default NavMenu;
