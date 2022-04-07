import React, { useState, useEffect } from 'react';
import Login from '../../pages/Login/Login';
import Cart from '../../pages/Cart/Cart';
import ModalOverLay from '../UI/ModalOverLay';
import CategoryElement from './CategoryElement';
import NAV_CATEGORY_LIST from './navCategoryData';
import './Nav.scss';

const Nav = () => {
  const [loginedUserInfo, setLoginedUserInfo] = useState({});

  const [showingLoginModal, setShowingLoginModal] = useState(false);
  const [showingCartModal, setShowingCartModal] = useState(false);
  const [isLogined, setIsLogined] = useState(false);

  const clearLoginedUserInfo = () => {
    setLoginedUserInfo({
      email: '',
      userId: '',
      firstName: '',
      lastName: '',
    });
  };

  const logoutHandler = () => {
    clearLoginedUserInfo();
    localStorage.removeItem('token');
  };

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

  const loginedUserInfoHandler = userInfo => {
    setLoginedUserInfo(userInfo);
  };

  const alertRecommendLogin = () => {
    alert('카트기능을 이용하시려면 로그인 해주세요.');
  };

  const showMessageCantOpenModal = () => {
    openLoginModalHandler();
    alertRecommendLogin();
  };

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      setIsLogined(true);
    } else if (!token) {
      setIsLogined(false);
    }
  }, [loginedUserInfo]);

  return (
    <div className="Nav">
      <div className="navMainCategory">
        {NAV_CATEGORY_LIST.map(({ id, categoryName }) => (
          <CategoryElement key={id} categoryName={categoryName} />
        ))}
        <i className="fa-solid fa-magnifying-glass" />
      </div>
      <div className="navUserCategory">
        {isLogined ? (
          <span className="loginedUserName">
            {loginedUserInfo.lastName}
            {loginedUserInfo.firstName}
          </span>
        ) : (
          <button
            className="oepnLoginModalBtn"
            type="button"
            onClick={openLoginModalHandler}
          >
            로그인
          </button>
        )}

        {isLogined ? (
          <button
            className="openCartModalBtn"
            type="button"
            onClick={openCartModalHandler}
          >
            카트
          </button>
        ) : (
          <button
            className="openCartModalBtn"
            type="button"
            onClick={showMessageCantOpenModal}
          >
            카트
          </button>
        )}

        {isLogined ? (
          <button className="logOutBtn" onClick={logoutHandler}>
            로그아웃
          </button>
        ) : (
          ''
        )}
      </div>
      {showingCartModal ? (
        <Cart onCloseCartModal={closeCartModalHandler} />
      ) : (
        ''
      )}
      {showingCartModal ? (
        <ModalOverLay
          onCloseCartModal={closeCartModalHandler}
          onCloseLoginModal={closeLoginModalHandler}
        />
      ) : (
        ''
      )}
      {showingLoginModal ? (
        <Login
          onCloseLoginModal={closeLoginModalHandler}
          onSetLoginedUserInfo={loginedUserInfoHandler}
        />
      ) : (
        ''
      )}
      {showingLoginModal ? (
        <ModalOverLay
          onCloseCartModal={closeCartModalHandler}
          onCloseLoginModal={closeLoginModalHandler}
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default Nav;
