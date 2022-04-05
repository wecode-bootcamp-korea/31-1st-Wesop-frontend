import React from 'react';
import './CategoryElement.scss';

const CategoryElement = ({ categoryName, onOpenLoginModal }) => {
  const onlyLoginBtnOpenLoginModal = () => {
    if (categoryName === '로그인') onOpenLoginModal();
  };

  return (
    <span className="CategoryElement" onClick={onlyLoginBtnOpenLoginModal}>
      {categoryName}
    </span>
  );
};

export default CategoryElement;
