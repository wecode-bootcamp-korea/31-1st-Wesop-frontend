import React, { useState } from 'react';
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
  // TODO: 잘되면 삭제
  // const [cartList, setCartList] = useState([]);

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

  // TODO: 잘되면 삭제
  // const cartListHandler = data => {
  //   setCartList(data);
  // };

  const loginedUserInfoHandler = userInfo => {
    setLoginedUserInfo(userInfo);
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
            onClick={openLoginModalHandler}
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
          onCLoseLoginModal={closeLoginModalHandler}
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
          onCLoseLoginModal={closeLoginModalHandler}
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default Nav;
