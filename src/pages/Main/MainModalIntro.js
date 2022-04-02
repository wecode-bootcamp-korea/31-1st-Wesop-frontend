import React, { useRef, useState, useEffect } from 'react';
import PopupSlideIntro from './PopupSlideIntro';
import MainModalContainer from './MainModalContainer';
import MainModalPopup from './MainModalPopup';
import ModalData from './ModalData';
import './MainModalIntro.scss';

const MainModalIntro = () => {
  const popupRef = useRef();
  const [leftPopupState, setLeftPopupState] = useState(false);

  useEffect(() => {
    leftPopupState
      ? (popupRef.current.style.transform = `translate(-100%)`)
      : (popupRef.current.style.transform = `translate(0%)`);
  }, [leftPopupState]);

  return (
    <div className="MainModalIntro">
      <PopupSlideIntro />
      <div className="MainModal">
        {ModalData.map(data => (
          <MainModalContainer
            key={data.id}
            title={data.title}
            header={data.header}
            description={data.description}
            state={setLeftPopupState}
          />
        ))}
      </div>
      <div ref={popupRef} className="modalPopup">
        <MainModalPopup state={setLeftPopupState} />
      </div>
    </div>
  );
};

export default MainModalIntro;
