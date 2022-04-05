import React, { useRef, useState, useEffect } from 'react';
import PopupSlideIntro from './PopupSlideIntro';
import MainShampooContainer from './MainShampooContainer';
import ShampooSlide from './ShampooSlide';
import SHAMPOO_DATA from './SHAMPOO_DATA';
import './MainPopupSlide.scss';

const MainPopupSlide = () => {
  const [leftPopupState, setLeftPopupState] = useState({
    state: false,
    title: '',
    data: [],
  });

  const popupRef = useRef();

  useEffect(() => {
    leftPopupState.state
      ? (popupRef.current.style.transform = `translate(0)`)
      : (popupRef.current.style.transform = `translate(-100%)`);
  }, [leftPopupState]);

  return (
    <div className="mainPopupSlide">
      <PopupSlideIntro />
      <div className="mainShampoo">
        {SHAMPOO_DATA.map(({ id, title, header, description }) => (
          <MainShampooContainer
            key={id}
            title={title}
            header={header}
            description={description}
            setLeftPopupState={setLeftPopupState}
            data={SHAMPOO_DATA}
          />
        ))}
      </div>
      <div ref={popupRef} className="shampooPopup">
        {leftPopupState.data.filterData && (
          <ShampooSlide
            data={leftPopupState.data.filterData}
            setLeftPopupState={setLeftPopupState}
          />
        )}
      </div>
    </div>
  );
};

export default MainPopupSlide;
