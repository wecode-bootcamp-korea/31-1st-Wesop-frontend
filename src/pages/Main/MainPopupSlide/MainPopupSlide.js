import React, { useRef, useState, useEffect } from 'react';
import PopupSlideIntro from './PopupSlideIntro';
import MainShampooContainer from './MainShampooContainer';
import ShampooSlide from './ShampooSlide';
import SHAMPOO_DATA from './SHAMPOO_DATA';
import './MainPopupSlide.scss';

const MainPopupSlide = () => {
  const [leftPopupState, setLeftPopupState] = useState(false);
  const popupRef = useRef();

  useEffect(() => {
    leftPopupState
      ? (popupRef.current.style.transform = `translate(0)`)
      : (popupRef.current.style.transform = `translate(-100%)`);
  }, [leftPopupState]);

  return (
    <div className="MainPopupSlide">
      <PopupSlideIntro />
      <div className="mainShampoo">
        {SHAMPOO_DATA.map(({ id, title, header, description }) => (
          <MainShampooContainer
            key={id}
            title={title}
            header={header}
            description={description}
            state={setLeftPopupState}
          />
        ))}
      </div>
      <div ref={popupRef} className="shampooPopup">
        {SHAMPOO_DATA.map(({ id, image, title, header, detail }) => (
          <ShampooSlide
            key={id}
            image={image}
            title={title}
            header={header}
            detail={detail}
            state={setLeftPopupState}
          />
        ))}
      </div>
    </div>
  );
};

export default MainPopupSlide;
