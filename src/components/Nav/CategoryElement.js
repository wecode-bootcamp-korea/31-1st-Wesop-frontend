import React from 'react';
import './CategoryElement.scss';

const CategoryElement = ({
  categoryName,
  onOpenLoginModal,
  onOpenCartModal,
}) => {
  const conditionWhatWindowOpened = {
    로그인: function () {
      onOpenLoginModal();
    },
    카트: function () {
      onOpenCartModal();
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
