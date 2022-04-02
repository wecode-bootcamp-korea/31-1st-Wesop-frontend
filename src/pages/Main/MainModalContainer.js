import React from 'react';
import './MainModalContainer.scss';

const MainModalContainer = ({ title, header, description, state }) => {
  return (
    <div className="MainModalContainer">
      <img
        className="MainModalImage"
        src="/images/main/샴푸백그라운드.jpg"
        alt="샴푸백그라운드"
      />
      <div className="MainModalWrapper">
        <div className="MainModalTitle">{title}</div>
        <div className="MainModalHeader">{header}</div>
        <div className="MainModalDescription">{description}</div>
        <div onClick={() => state(false)} className="MainModalLink">
          {title} 보기
        </div>
      </div>
    </div>
  );
};

export default MainModalContainer;
