import React, { useState } from 'react';
import CategoryElement from './CategoryElement';
import NAV_CATEGORY_LIST from './navCategoryData';
import USER_CATEGORY_LIST from './userCategoryData';
import Login from '../../pages/Login/Login';
import Cart from '../../pages/Cart/Cart';
import ModalOverLay from '../UI/ModalOverLay';
import './Nav.scss';

const Nav = () => {
  const [showingLoginModal, setShowingLoginModal] = useState(false);
  const [showingCartModal, setShowingCartModal] = useState(false);
  const [cartList, setCartList] = useState([]);

  const openLoginModalHandler = () => {
    setShowingLoginModal(true);
  };

  const closeLoginModalHandler = () => {
    setShowingLoginModal(false);
  };

  const openCartModalHandler = () => {
    setShowingCartModal(true);
  };

  const closeCartModalHandler = () => {
    setShowingCartModal(false);
  };

  const cartListHandler = data => {
    setCartList(data);
  };

  return (
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
            onOpenCartModal={openCartModalHandler}
          />
        ))}
      </div>
      {showingCartModal ? (
        <Cart
          onChangeCartList={cartListHandler}
          onCloseCartModal={closeCartModalHandler}
          cartList={cartList}
        />
      ) : (
        ''
      )}
      {showingCartModal ? (
        <ModalOverLay onCloseCartModal={closeCartModalHandler} />
      ) : (
        ''
      )}
      {showingLoginModal ? (
        <Login onCLoseLoginModal={closeLoginModalHandler} />
      ) : (
        ''
      )}
      {showingLoginModal ? (
        <ModalOverLay onCLoseLoginModal={closeLoginModalHandler} />
      ) : (
        ''
      )}
    </div>
  );
};

export default Nav;
