import React from 'react';
import './FilterColumnContent.scss';

const FilterColumnContent = ({ listitem }) => {
  return (
    <li className="filterColumnContent">
      <input type="checkbox" id={listitem} name={listitem} value={listitem} />
      <label for={listitem}>{listitem}</label>
    </li>
  );
};

export default FilterColumnContent;
