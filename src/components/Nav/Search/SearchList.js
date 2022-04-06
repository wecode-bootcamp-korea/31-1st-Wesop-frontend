import React from 'react';
import './SearchList.scss';

const SearchList = ({ setListHover }) => {
  return (
    <div className="searchList">
      <div className="listTitle">구매하기</div>
      <ul className="searchListWrapper">
        <li
          className="searchItem"
          onMouseOver={() => setListHover(true)}
          onMouseOut={() => setListHover(false)}
        >
          클렌저
        </li>
        <li className="searchItem">클렌저</li>
        <li className="searchItem">클렌저</li>
      </ul>
    </div>
  );
};

export default SearchList;
