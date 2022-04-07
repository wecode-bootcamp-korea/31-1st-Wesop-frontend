import React from 'react';
import './CategoryElement.scss';

const CategoryElement = ({ categoryName, menuHandler }) => {
  return (
    <span className="CategoryElement" onClick={() => menuHandler(categoryName)}>
      {categoryName}
    </span>
  );
};

export default CategoryElement;
