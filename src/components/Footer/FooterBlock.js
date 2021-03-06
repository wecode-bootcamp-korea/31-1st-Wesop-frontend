import React from 'react';
import FooterBlockList from './FooterBlockList';
import './FooterBlock.scss';

const FooterBlock = ({ blockTitle, elementList }) => {
  return (
    <div className="FooterBlock">
      <div className="footerBlockTitle">{blockTitle}</div>
      <ul className="footerBlockListWrapper">
        {elementList.map(({ id, element }) => (
          <FooterBlockList key={id} element={element} />
        ))}
      </ul>
    </div>
  );
};

export default FooterBlock;
