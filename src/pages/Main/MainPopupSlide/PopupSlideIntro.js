import React from 'react';
import './PopupSlideIntro.scss';

const PopupSlideIntro = () => {
  return (
    <div className="PopupSlideIntro">
      <div className="popupSlideIntroHeader">
        <div className="introHeaderTitle">샴푸와 컨디셔너</div>
        <div className="introHeaderPhrase">
          흥미로운 발상: 헤어 케어는 두피에서 시작됩니다.
        </div>
      </div>
      <div className="popupSlideDescription">
        모발의 뿌리부터 끝까지 효과적인 헤어 케어: 샴푸와 컨디셔너가 함께 두피와
        모발을 깨끗하고 상쾌하게 세정하며 영양을 공급하여 건강하게 가꿔줍니다.
      </div>
    </div>
  );
};

export default PopupSlideIntro;
