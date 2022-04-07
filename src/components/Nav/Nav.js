import React, { useState } from 'react';
import Login from '../../pages/Login/Login';
import Cart from '../../pages/Cart/Cart';
import ModalOverLay from '../UI/ModalOverLay';
import CategoryElement from './CategoryElement';
import NAV_CATEGORY_LIST from './navCategoryData';
import './Nav.scss';

const Nav = () => {
  const [loginedUserInfo, setLoginedUserInfo] = useState({});
  // TODO: 임시 홍길동 지우기
  // const [loginedUserInfo, setLoginedUserInfo] = useState({
  //   email: 'Test',
  //   lastName: '홍',
  //   firstName: '길동',
  // });
  const [showingLoginModal, setShowingLoginModal] = useState(false);
  const [showingCartModal, setShowingCartModal] = useState(false);

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

  return (
    <div className="Nav">
      <div className="navMainCategory">
        {NAV_CATEGORY_LIST.map(({ id, categoryName }) => (
          <CategoryElement key={id} categoryName={categoryName} />
        ))}
        <i className="fa-solid fa-magnifying-glass" />
      </div>
      <div className="navUserCategory">
        {loginedUserInfo.email ? (
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

        {loginedUserInfo.email ? (
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
            onClick={() => {
              openLoginModalHandler();
              alertRecommendLogin();
            }}
          >
            카트
          </button>
        )}

        {loginedUserInfo.email ? (
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
