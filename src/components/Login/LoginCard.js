import React from 'react';
import './LoginCard.scss';

const LoginCard = ({ className, children }) => {
  return <div className={`loginCard ${className}`}>{children}</div>;
};

export default LoginCard;
