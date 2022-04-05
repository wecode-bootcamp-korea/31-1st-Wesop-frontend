const mainResCondition = {
  true: function () {
    setLoginError('');
    goToSignIn();
  },
  VALIDATION_ERROR: function () {
    setLoginError('wrongEmail');
  },
  false: function () {
    goToSignUp();
    onClearUserInfo();
    setLoginError('');
  },
};

/////////////////////////////////////
const mainEmailInfoSubmit = () => {
  fetch(loginMainAddress, {
    method: 'POST',
    body: JSON.stringify({
      email: userInfo.email,
    }),
  })
    .then(res => res.json())
    .then(res => {
      const { message } = res;

      mainResCondition[message]();
    });
};

///////////////////////////////////////

const signInInfoSubmit = () => {
  fetch(loginSignInAddress, {
    method: 'POST',
    body: JSON.stringify({
      email: userInfo.email,
      password: userInfo.password,
    }),
  })
    .then(res => res.json())
    .then(res => {
      const { token, email, userId, firstName, lastName, message } = res;

      const resCondition = {
        SUCCESS: function () {
          localStorage.setItem('token', token);
          localStorage.setItem('email', email);
          localStorage.setItem('userId', userId);
          localStorage.setItem('firstName', firstName);
          localStorage.setItem('lastName', lastName);
          setLoginError('');
          onClearUserInfo();
          onCloseModal();
        },
        VALIDATION_ERROR: function () {
          setLoginError('wrongPassword');
        },
      };

      resCondition[message]();
    });
};

const signUpInfoSubmit = () => {
  if (isInputAllValid && loginMode === 'signUp') {
    fetch(loginSignUpAddress, {
      method: 'POST',
      body: JSON.stringify({
        email: userInfo.email,
        password: userInfo.password,
        last_name: userInfo.lastName,
        first_name: userInfo.firstName,
      }),
    })
      .then(res => res.json())
      .then(res => {
        const { token, email, userId, firstName, lastName, message } = res;
        const resCondition = {
          SUCCESS: function () {
            localStorage.setItem('token', token);
            localStorage.setItem('email', email);
            localStorage.setItem('userId', userId);
            localStorage.setItem('firstName', firstName);
            localStorage.setItem('lastName', lastName);
            setLoginError('');
            onClearUserInfo();
            onCloseModal();
          },
          ALREADY_EXIST_EMAIL: function () {
            setLoginError('alreadyExist');
          },
          VALIDATION_ERROR: function () {
            setLoginError('wrongEmail');
          },
          KEY_ERROR: function () {
            setLoginError('failedPost');
          },
        };

        resCondition[message]();
      });
  }
};
