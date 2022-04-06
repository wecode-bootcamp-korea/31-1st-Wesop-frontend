import React, { useState } from 'react';
import SearchImage from './SearchImage';
import './SearchList.scss';

const SearchList = () => {
  const [listHover, setListHover] = useState(false);

  const hoverHandler = () => {
    setListHover(true);
  };
  return (
    <div className="searchList">
      <div className="listContainer">
        <div className="listTitle">구매하기</div>
        <ul className="searchListWrapper">
          <li className="searchItem" onMouseOver={hoverHandler}>
            클렌저
          </li>
          <li className="searchItem">클렌저</li>
          <li className="searchItem">클렌저</li>
        </ul>
      </div>
      {listHover && <SearchImage />}
    </div>
  );
};

export default SearchList;
