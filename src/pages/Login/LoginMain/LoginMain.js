import React, { useState } from 'react';
import './LoginInsert.scss';

const LoginMain = ({ onChangeMode }) => {
  // TODO: submitBtn onClick때 백으로 id,pw 보내는 코드 짜서 넣어야됨

  const [enteredEmail, setEnteredEmail] = useState('');
  const [isContainAt, setIsContainAt] = useState(true);

  const changeEmailHandler = event => {
    setEnteredEmail(event.target.value);
  };

  const checkAt = () => {
    enteredEmail.length === 0 || enteredEmail.includes('@')
      ? setIsContainAt(true)
      : setIsContainAt(false);
  };

  const submitEmailHandler = event => {
    event.preventDefault();
    if (enteredEmail && isContainAt) {
      console.log('submit activvvve');
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

  const emailErrMSg = (
    <p>
      "이메일 주소 형식에 맞지 않습니다. 다시 확인해주세요. (예:
      name@example.com)"
    </p>
  );
  return (
    <form className="loginMain" onSubmit={submitEmailHandler}>
      {inputEmail}
      {isContainAt ? '' : emailErrMSg}
      <button type="submit">보내기</button>
    </form>
  );
};

export default LoginMain;
