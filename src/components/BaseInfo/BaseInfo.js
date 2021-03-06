import React from 'react';
import './BaseInfo.scss';

const BaseInfo = ({ subtitle, title, description, btnText, imgSrc }) => {
  return (
    <div className="baseInfo">
      <div className="twoColumnModule">
        <aside className="copy">
          {subtitle.length > 0 && <h3 className="subtitle">{subtitle}</h3>}
          <h2 className="title">{title}</h2>
          <p className="description">{description}</p>
          <button className="btnHoverDark">
            <span className="btnText">{btnText}</span>
            <span>
              <i className="btnIcon fa-solid fa-arrow-right-long" />
            </span>
          </button>
        </aside>
        <div className="imgWrapper">
          <img alt="cover" src={imgSrc} />
        </div>
      </div>
    </div>
  );
};

export default BaseInfo;
