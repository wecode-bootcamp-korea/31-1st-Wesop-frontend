import React from 'react';

const LoginSendedPw = ({ onCloseModal }) => {
  const closeModal = () => {
    onCloseModal();
  };

  return (
    <section className="loginSendedPw">
      <button onClick={closeModal}>닫기</button>
    </section>
  );
};

export default LoginSendedPw;
