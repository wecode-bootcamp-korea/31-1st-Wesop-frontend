import React from 'react';
import './MainShampooContainer.scss';
import SHAMPOO_DATA from './SHAMPOO_DATA';

const MainShampooContainer = ({
  title,
  header,
  description,
  setLeftPopupState,
}) => {
  let filterData = SHAMPOO_DATA.filter(function (data) {
    return data.title.includes(title);
  });

  const popupHandler = () => {
    setLeftPopupState(stateObject => ({
      ...stateObject,
      state: true,
      title: { title },
      data: { filterData },
    }));
  };

  return (
    <div className="mainShampooContainer">
      <img
        className="shampooImage"
        src="/images/main/샴푸백그라운드.jpg"
        alt="샴푸백그라운드"
      />
      <div className="shampooWrapper">
        <div className="shampooTitle">{title}</div>
        <div className="shampooHeader">{header}</div>
        <div className="shampooDescription">{description}</div>
        <div onClick={popupHandler} className="shampooLink">
          {title} 보기
        </div>
      </div>
    </div>
  );
};

export default MainShampooContainer;
