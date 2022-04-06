import React, { useState } from 'react';
import SearchImage from './SearchImage';
import './SearchList.scss';

const SearchList = ({ searchData }) => {
  const [listHover, setListHover] = useState(false);

  const hoverHandler = boolean => {
    setListHover(boolean);
  };
  return (
    <div className="searchList" onMouseLeave={() => hoverHandler(false)}>
      <div className="listContainer">
        <div className="listTitle">구매하기</div>
        <ul className="searchListWrapper">
          {searchData.result &&
            searchData.result.map(({ id, productName }) => (
              <li
                key={id}
                className="searchItem"
                onMouseOver={() => hoverHandler(true)}
              >
                {productName}
              </li>
            ))}
        </ul>
      </div>
      {listHover && <SearchImage />}
    </div>
  );
};

export default SearchList;
