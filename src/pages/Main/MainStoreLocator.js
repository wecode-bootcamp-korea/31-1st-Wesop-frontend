import React from 'react';
import FullCarousel from './FullCarousel';
import './MainStoreLocator.scss';

const MainStoreLocator = () => {
  return (
    <div className="baseInfo">
      <div className="twoColumnModule">
        <aside className="copy">
          <h2 className="title">스토어 로케이터</h2>
          <p className="description">
            매장에서는 이솝 컨설턴트가 고객 여러분을 따뜻하게 맞이하고 기프트
            구매를 위한 맞춤형 컨설팅을 제공해드립니다.
          </p>
          <button className="btnHoverDark">
            <span className="btnText">가까운 스토어 찾기</span>
            <span>
              <i className="btnIcon fa-solid fa-arrow-right-long" />
            </span>
          </button>
        </aside>
        <div className="imgWrapper">
          <FullCarousel />
        </div>
      </div>
    </div>
  );
};

export default MainStoreLocator;
