import React from 'react';
import './LoginMsg.scss';

const LoginMsg = ({ loginMode }) => {
  const titleString = [
    '',
    '안녕하세요',
    '이솝에 다시 오신 것을 환영합니다.',
    '이솝에 오신 것을 환영합니다.',
    '패스워드 재설정하기',
    '진행 중입니다.',
  ];
  const contentString = [
    '',
    '로그인 및 회원가입을 위한 이메일 주소를 입력 부탁드립니다.',
    '패스워드를 입력해주세요.',
    '회원가입을 위해 아래의 세부 정보를 작성해주세요.',
    '새 패스워드를 만들기 위한 링크를 전송해드립니다.',
    '새 패스워드를 만들기 위한 링크가 전송되었습니다.',
  ];

  return (
    <section className="loginMsgArea">
      <p>{titleString[loginMode]}</p>
      <p>{contentString[loginMode]}</p>
    </section>
  );
};

export default LoginMsg;
