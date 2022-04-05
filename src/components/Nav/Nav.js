import React, { useState } from 'react';
import CategoryElement from './CategoryElement';
import NAV_CATEGORY_LIST from './navCategoryData';
import USER_CATEGORY_LIST from './userCategoryData';
import Login from '../../pages/Login/Login';
import ModalOverLay from '../UI/ModalOverLay';
import './Nav.scss';

const Nav = () => {
  const [showingLoginModal, setShowingLoginModal] = useState(false);

  const openLoginModalHandler = () => {
    setShowingLoginModal(true);
  };

  const closeLoginModalHandler = () => {
    setShowingLoginModal(false);
  };
  return (
    <>
      <div className="Nav">
        <div className="navMainCategory">
          {NAV_CATEGORY_LIST.map(({ id, categoryName }) => (
            <CategoryElement key={id} categoryName={categoryName} />
          ))}
          <i className="fa-solid fa-magnifying-glass" />
        </div>
        <div className="navUserCategory">
          {USER_CATEGORY_LIST.map(({ id, categoryName }) => (
            <CategoryElement
              key={id}
              categoryName={categoryName}
              onOpenLoginModal={openLoginModalHandler}
            />
          ))}
        </div>
      </div>
      <div className="loginModalArea">
        {showingLoginModal ? <Login /> : ''}
        {showingLoginModal ? <ModalOverLay /> : ''}
      </div>
    </>
  );
};

export default Nav;
