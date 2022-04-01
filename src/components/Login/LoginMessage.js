import React from 'react';
import './LoginMessage.scss';

const LoginMessage = ({ loginMode, loginError }) => {
  let titleMsg = '';
  let contentMsg = '';
  let errorMsg = '';

  if (loginMode === 'main') {
    titleMsg = '안녕하세요';
    contentMsg = '로그인 및 회원가입을 위한 이메일 주소를 입력 부탁드립니다.';
  } else if (loginMode === 'signUp') {
    titleMsg = '위솝에 오신 것을 환영합니다.';
    contentMsg = '회원가입을 위해 아래의 세부 정보를 작성해주세요.';
  } else if (loginMode === 'signIn') {
    titleMsg = '위솝에 다시 오신 것을 환영합니다.';
    contentMsg = '패스워드를 입력해주세요';
  } else if (loginMode === 'resetPw') {
    titleMsg = '패스워드 재설정하기';
    contentMsg = '새 패스워드를 만들기 위한 링크를 전송해드립니다.';
  } else if (loginMode === 'receivedPw') {
    titleMsg = '진행 중입니다.';
    contentMsg = '새 패스워드를 만들기 위한 링크가 전송되었습니다.';
  }
  // 1.wrongEmail 2.wrongPassword 3.failedPost
  if (loginError === 'wrongEmail') {
    errorMsg = '이메일 양식에 맞게 입력해주세요(8글자 이상, @ 포함)';
  } else if (loginError === 'wrongPassword') {
    errorMsg = '이메일과 패스워드가 일치하지 않습니다. 다시 시도하십시오';
  } else if (loginError === 'failedPost') {
    errorMsg = '정보 전송에 실패하였습니다. 잠시후 다시 시도하십시오.';
  } else if (loginError === 'alreadyExist') {
    errorMsg = '이미 등록된 이메일입니다.';
  }
  return (
    <div className="loginMessage">
      <p className="titleMessage">{titleMsg}</p>
      <p className="contentMessage">{contentMsg}</p>
      <p className="loginErrorMessage">{errorMsg}</p>
    </div>
  );
};

export default LoginMessage;
