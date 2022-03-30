import React from 'react';
import './LoginCard.scss';

const LoginCard = props => {
  return <div className={`loginCard ${props.className}`}>{props.children}</div>;
};

export default LoginCard;

// import React from "react";
// import classes from "./Card.module.css";

// const Card = (props) => {
//     return <div className={`${classes.card} ${props.className}`}>{props.children}</div>;
// };

// export default Card;
