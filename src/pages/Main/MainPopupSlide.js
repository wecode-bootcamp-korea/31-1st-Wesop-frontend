import React, { useRef, useState, useEffect } from 'react';
import PopupSlideIntro from './PopupSlideIntro';
import MainShampooContainer from './MainShampooContainer';
import ShampooSlide from './ShampooSlide';
import ShampooData from './ShampooData';
import './MainPopupSlide.scss';

const MainPopupSlide = () => {
  const popupRef = useRef();
  const [leftPopupState, setLeftPopupState] = useState(true);

  useEffect(() => {
    leftPopupState
      ? (popupRef.current.style.transform = `translate(-100%)`)
      : (popupRef.current.style.transform = `translate(0%)`);
  }, [leftPopupState]);

  return (
    <div className="MainPopupSlide">
      <PopupSlideIntro />
      <div className="mainShampoo">
        {ShampooData.map(data => (
          <MainShampooContainer
            key={data.id}
            title={data.title}
            header={data.header}
            description={data.description}
            state={setLeftPopupState}
          />
        ))}
      </div>
      <div ref={popupRef} className="shampooPopup">
        <ShampooSlide state={setLeftPopupState} />
      </div>
    </div>
  );
};

export default MainPopupSlide;
