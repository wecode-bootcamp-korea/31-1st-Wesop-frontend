import React, { useState } from 'react';
import NavMenu from './Menu/NavMenu';
import Search from './Search/Search';
import Login from '../../pages/Login/Login';
import ModalOverLay from '../UI/ModalOverLay';
import CategoryElement from './CategoryElement';
import NAV_CATEGORY_LIST from './navCategoryData';
import './Nav.scss';

const Nav = () => {
  const [showingLoginModal, setShowingLoginModal] = useState(false);
  const [loginedUserInfo, setLoginedUserInfo] = useState({});
  const [menu, setMenu] = useState('');

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

  const loginedUserInfoHandler = userInfo => {
    setLoginedUserInfo(userInfo);
  };

  const menuHandler = value => {
    setMenu(value);
  };

  const closeMenu = () => {
    setMenu('');
  };

  return (
    <div className="Nav">
      <div className="navWrapper">
        <div className="navMainCategory">
          {NAV_CATEGORY_LIST.map(({ id, categoryName }) => (
            <CategoryElement
              key={id}
              categoryName={categoryName}
              menuHandler={menuHandler}
            />
          ))}
          {!!menu && (
            <span className="closeMenu" onClick={closeMenu}>
              닫기 ✕
            </span>
          )}
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
            <button className="openCartModalBtn" type="button">
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
      </div>

      {menu === '스킨 케어' && <NavMenu menuHandler={menuHandler} />}
      {menu === '검색' && <Search />}
      {showingLoginModal ? (
        <Login
          onCloseLoginModal={closeLoginModalHandler}
          onSetLoginedUserInfo={loginedUserInfoHandler}
        />
      ) : (
        ''
      )}
      {showingLoginModal ? (
        <ModalOverLay onCloseLoginModal={closeLoginModalHandler} />
      ) : (
        ''
      )}
    </div>
  );
};

export default Nav;
