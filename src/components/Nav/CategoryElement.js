import React from 'react';
import './CategoryElement.scss';

const CategoryElement = ({ categoryName, onOpenLoginModal }) => {
  const conditionWhatWindowOpened = {
    로그인: function () {
      onOpenLoginModal();
    },
  };

  return (
    <span
      className="CategoryElement"
      onClick={conditionWhatWindowOpened[categoryName]}
    >
      {categoryName}
    </span>
  );
};

export default CategoryElement;
