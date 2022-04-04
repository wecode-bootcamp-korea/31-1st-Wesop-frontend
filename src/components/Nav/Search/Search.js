import React from 'react';
import './Search.scss';

const Search = () => {
  return (
    <div className="Search">
      <div className="searchBox">
        <img className="logo" src="/images/common/Wesop.png" alt="로고" />
        <form className="searchInputWrapper">
          <input className="searchInput" name="searchInput" type="text" />
          <button className="searchBtn" />
        </form>
      </div>
      <div className="searchList">a</div>
      <div className="searchImage">a</div>
    </div>
  );
};

export default Search;
