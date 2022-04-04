import React from 'react';
import './MainShampooContainer.scss';

const MainShampooContainer = ({ title, header, description, state }) => {
  return (
    <div className="MainShampooContainer">
      <img
        className="shampooImage"
        src="/images/main/샴푸백그라운드.jpg"
        alt="샴푸백그라운드"
      />
      <div className="shampooWrapper">
        <div className="shampooTitle">{title}</div>
        <div className="shampooHeader">{header}</div>
        <div className="shampooDescription">{description}</div>
        <div onClick={() => state(true)} className="shampooLink">
          {title} 보기
        </div>
      </div>
    </div>
  );
};

export default MainShampooContainer;
