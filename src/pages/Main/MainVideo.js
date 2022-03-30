import React from 'react';
import './MainVideo.scss';

const MainVideo = () => {
  return (
    <div className="MainVideo">
      <div className="MainVideoWrapper">
        <video className="backgroundVideo" muted autoPlay loop>
          <source src="\images\main\backgroundVideo.mp4" type="video/mp4" />
        </video>
        <img className="wesopLogo" src="/images/common/Wesop.png" alt="Wesop" />
        <div className="MainVideoParagraphWrapper">
          <div className="MainVideoParagraphIntro">눈가를 위한 피부 만찬</div>
          <div className="MainVideoParagraphHeader">
            이그절티드 아이 세럼 소개
          </div>
          <div className="MainVideoParagraphContent">
            섬세한 눈가 피부에 영양을 전하기 위해 비타민 B3, 프로비타민 B5,
            비타민 C 유도체, 비타민 E를 풍부하게 함유한 가벼운 제품으로 스킨케어
            플러스 레인지에서 새롭게 선보이는 강력한 하이드레이터입니다.
          </div>
          <a className="MainVideoParagraphLink" href="/product-list">
            <span>이그절티드 아이 세럼 보기</span>
            <i className="fa-solid fa-arrow-right" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainVideo;
