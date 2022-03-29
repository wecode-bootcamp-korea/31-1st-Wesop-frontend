import React, { useEffect, useState } from 'react';
import FooterBlock from './FooterBlock';
import './FooterGrid.scss';

const FooterGrid = () => {
  const [blockData, setBlockData] = useState([]);

  useEffect(() => {
    fetch('/data/footerBlockData.json')
      .then(res => res.json())
      .then(data => setBlockData(data));
  }, []);

  return (
    <div className="FooterGrid">
      <div className="footerEmail">
        <div className="footerEmailInputWrapper">
          <input
            className="footerEmailInput"
            type="text"
            placeholder="이메일 주소"
          />
          <i className="fa-solid fa-arrow-right" />
        </div>
        <div className="footerEmailPhrase">
          이솝 제품, 서비스, 스토어, 행사, 문화적 관심사 등 다양한 소식을 받아볼
          수 있도록 구독하세요.
        </div>
        <div className="footerCheckboxWrapper">
          <input
            className="footerCheckbox"
            id="footerCheckbox"
            type="checkbox"
          />
          <label htmlFor="footerCheckbox" />
          <span className="footerCheckboxPhrase">
            본인의 만 14세 이상 여부를 확인해주세요.
          </span>
        </div>
      </div>
      {blockData.map(list => (
        <FooterBlock
          key={list.id}
          blockTitle={list.blockTitle}
          elementList={list.elementList}
        />
      ))}
    </div>
  );
};

export default FooterGrid;
