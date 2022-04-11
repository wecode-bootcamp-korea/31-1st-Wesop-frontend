import React from 'react';
import MainCarousel from './MainCarousel';
import './Selection.scss';

const Selection = () => {
  return (
    <div className="selection">
      <div className="selectionWord">탁월한 셀렉션</div>
      <MainCarousel category="키트" />
    </div>
  );
};

export default Selection;
