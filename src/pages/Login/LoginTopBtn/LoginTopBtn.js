import React from 'react';

const LoginTopBtn = ({ loginMode, onCloseModal, onChangeMode }) => {
  const goToMain = () => {
    onChangeMode(1);
  };

  const escapeBtn = (
    <button className="closeLoginModalBtn" type="button" onClick={onCloseModal}>
      <i className="fa-solid fa-xmark" />
    </button>
  );

  const backArrowBtn = (
    <button className="retrunLoginBtn" type="button" onClick={goToMain}>
      <i className="fa-solid fa-arrow-left-long" />
    </button>
  );
  return (
    <section className="loginBtnArea">
      {loginMode === 1 ? '' : backArrowBtn}
      {escapeBtn}
    </section>
  );
};

export default LoginTopBtn;
