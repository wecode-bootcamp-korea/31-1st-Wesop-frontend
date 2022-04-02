import React, { useRef } from 'react';
import './ShampooSlide.scss';

const ShampooSlide = ({ state }) => {
  const popupRef = useRef();

  return (
    <div ref={popupRef} className="ShampooSlide">
      <div className="popupWrapper">
        <img
          className="popupImage"
          src="/images/main/투명배경1.png"
          alt="샴푸"
        />
        <div className="popupBlock">
          <div className="popupTitle">샴푸</div>
          <div className="popupHeader">
            '베르가못 라인드, 프랑킨센스, 시더 아틀라스'
          </div>
          <div className="popupDescription">
            우디한 아로마와 풍성한 시트러스 향의 활력 있는 샴푸가 모발을
            깨끗하게 세정하고 순한 성분을 사용하여 두피의 균형을 지켜줍니다.
          </div>
        </div>
        <div className="closeBtn" onClick={() => state(true)}>
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
