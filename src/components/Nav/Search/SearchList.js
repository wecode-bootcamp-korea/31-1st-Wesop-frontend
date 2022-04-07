import React, { useState } from 'react';
import SearchImage from './SearchImage';
import './SearchList.scss';

const SearchList = ({ searchData }) => {
  const [listHover, setListHover] = useState(false);
  const [productURL, setProductURL] = useState('');

  const hoverHandler = boolean => {
    setListHover(boolean);
  };

  const mouseOverHandler = value => {
    setListHover(true);
    setProductURL(value);
  };

  return (
    <div className="searchList" onMouseLeave={() => hoverHandler(false)}>
      <div className="listContainer">
        <div className="listTitle">구매하기</div>
        <ul className="searchListWrapper">
          {searchData.result &&
            searchData.result.map(({ id, productName, url }) => (
              <li
                key={id}
                className="searchItem"
                onMouseOver={() => mouseOverHandler(url[0])}
              >
                {productName}
              </li>
            ))}
        </ul>
      </div>
      {listHover && <SearchImage productURL={productURL} />}
    </div>
  );
};

export default SearchList;
