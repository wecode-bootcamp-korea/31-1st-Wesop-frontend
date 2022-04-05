import React, { useRef } from 'react';
import './ShampooSlide.scss';

const ShampooSlide = ({ data, setLeftPopupState }) => {
  const popupRef = useRef();

  const { image, title, header, detail } = data[0];

  const popupHandler = () => {
    setLeftPopupState(stateObject => ({
      ...stateObject,
      state: false,
    }));
  };

  return (
    <div ref={popupRef} className="shampooSlide">
      <div className="popupWrapper">
        <img className="popupImage" src={image} alt={title} />
        <div className="popupBlock">
          <div className="popupTitle">{title}</div>
          <div className="popupHeader">{header}</div>
          <div className="popupDescription">{detail}</div>
        </div>
        <div className="closeBtn" onClick={popupHandler}>
          <img
            className="leftArrow"
            src="/images/main/leftarrow.png"
            alt="leftarrow"
          />
        </div>
      </div>
    </div>
  );
};

export default ShampooSlide;
