import React, { useState } from 'react';
import './LoginSignUp.scss';

const LoginSignUp = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPw, setEnteredPw] = useState('');
  const [enteredCheckPw, setEnteredCheckPw] = useState('');
  const [enteredLastName, setEnteredLastName] = useState('');
  const [enteredFirstName, setEnteredFirstName] = useState('');

  const [isSamePw, setIsSamePw] = useState(true);
  const [isContainAt, setIsContainAt] = useState(true);

  //////////
  const changeEmailHandler = event => {
    setEnteredEmail(event.target.value);
  };

  const changePwHandler = event => {
    setEnteredPw(event.target.value);
  };

  const changeCheckPwHandler = event => {
    setEnteredCheckPw(event.target.value);
  };

  const changeLastNameHandler = event => {
    setEnteredLastName(event.target.value);
  };

  const changeFirstNameHandler = event => {
    setEnteredFirstName(event.target.value);
  };

  const submitSignUpHandler = event => {
    event.preventDefault();
    if (
      isSamePw &&
      isContainAt &&
      enteredEmail &&
      enteredPw &&
      enteredCheckPw &&
      enteredLastName &&
      enteredFirstName
    ) {
      console.log('submit sign UP!!!');
    }
  };

  const checkAt = () => {
    enteredEmail.length === 0 || enteredEmail.includes('@')
      ? setIsContainAt(true)
      : setIsContainAt(false);
  };

  const checkSamePw = () => {
    if (!enteredPw || !enteredCheckPw) {
      return;
    }

    if (enteredPw !== enteredCheckPw) {
      setIsSamePw(false);
    }

    if (enteredPw === enteredCheckPw) {
      setIsSamePw(true);
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
    <input
      type="password"
      placeholder="패스워드"
      onChange={changePwHandler}
      onBlur={checkSamePw}
    />
  );

  const inputCheckPw = (
    <input
      type="password"
      placeholder="패스워드 확인"
      onChange={changeCheckPwHandler}
      onBlur={checkSamePw}
    />
  );

  const emailErrMSg = (
    <p>
      "이메일 주소 형식에 맞지 않습니다. 다시 확인해주세요. (예:
      name@example.com)"
    </p>
  );

  const pwErrMsg = <p>비밀번호가 일치하지 않습니다</p>;

  const inputLastName = (
    <input type="text" placeholder="성" onChange={changeLastNameHandler} />
  );

  const inputFirstName = (
    <input type="text" placeholder="이름" onChange={changeFirstNameHandler} />
  );

  return (
    <form className="loginSignUp" onSubmit={submitSignUpHandler}>
      {inputEmail}
      {isContainAt ? '' : emailErrMSg}
      {inputPw}
      {inputCheckPw}
      {isSamePw ? '' : pwErrMsg}
      {inputLastName}
      {inputFirstName}
      <button type="submit">등록</button>
    </form>
  );
};

export default LoginSignUp;
