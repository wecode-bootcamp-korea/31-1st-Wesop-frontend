import React from 'react';
import './LoginCard.scss';

const LoginCard = props => {
  return <div className={`loginCard ${props.className}`}>{props.children}</div>;
};

export default LoginCard;
