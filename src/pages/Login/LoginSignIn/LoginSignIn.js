import React, { useState } from 'react';
import './LoginSignIn.scss';

const LoginSignIn = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPw, setEnteredPw] = useState('');

  const [isContainAt, setIsContainAt] = useState(true);

  //////////
  const changeEmailHandler = event => {
    setEnteredEmail(event.target.value);
  };

  const changePwHandler = event => {
    setEnteredPw(event.target.value);
  };

  const checkAt = () => {
    enteredEmail.length === 0 || enteredEmail.includes('@')
      ? setIsContainAt(true)
      : setIsContainAt(false);
  };

  const submitSignInHandler = event => {
    event.preventDefault();
    if (isContainAt && enteredEmail && enteredPw) {
      console.log('submit sign In!!!');
    }
  };

  const inputEmail = (
    <input
      type="email"
      onChange={changeEmailHandler}
      onBlur={checkAt}
      placeholder="이메일 주소"
    />
  );

  const inputPw = (
    <input type="password" placeholder="패스워드" onChange={changePwHandler} />
  );

  const emailErrMSg = (
    <p>
      "이메일 주소 형식에 맞지 않습니다. 다시 확인해주세요. (예:
      name@example.com)"
    </p>
  );

  return (
    <form className="loginSignIn" onSubmit={submitSignInHandler}>
      {inputEmail}
      {isContainAt ? '' : emailErrMSg}
      {inputPw}
      <button type="submit">로그인</button>
    </form>
  );
};

export default LoginSignIn;
