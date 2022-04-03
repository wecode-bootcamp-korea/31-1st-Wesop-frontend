import React from 'react';
import FilterColumnContent from './FilterColumnContent/FilterColumnContent';
import './FilterColumn.scss';

const FilterColumn = ({ columnName, all, list }) => {
  return (
    <div className="filterColumn">
      <h5>{columnName}</h5>
      <ul className="filterColumnContents">
        <FilterColumnContent listitem={all} />
        {list.map((listitem, index) => {
          return <FilterColumnContent key={index} listitem={listitem} />;
        })}
      </ul>
    </div>
  );
};

export default FilterColumn;
