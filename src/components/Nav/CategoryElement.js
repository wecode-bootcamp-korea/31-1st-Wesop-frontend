import React from 'react';
import './CategoryElement.scss';

const CategoryElement = ({ categoryName }) => {
  return <span className="CategoryElement">{categoryName}</span>;
};

export default CategoryElement;
