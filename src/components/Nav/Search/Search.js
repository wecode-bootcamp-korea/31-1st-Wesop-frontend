import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SearchList from './SearchList';
import './Search.scss';

const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [searchData, setSearchData] = useState({});
  const [searchInput, setSearchInput] = useState('');
  const [showList, setShowList] = useState(false);

  const decodeLocation = decodeURI(location.search);

  useEffect(() => {
    fetch(`http://10.58.1.236:8000/products${decodeLocation}`)
      .then(res => res.json())
      .then(data => setSearchData(data));
  }, [location.search]);

  const inputHandler = e => {
    setSearchInput(e.target.value);
  };

  const queryHandler = () => {
    const queryString = decodeURI(`?search=${searchInput}`);
    navigate(`/${queryString}`);
  };

  const listHandler = () => {
    setShowList(true);
  };

  return (
    <div className="search">
      <div className="searchBox">
        <img className="logo" src="/images/common/Wesop.png" alt="로고" />
        <div className="searchInputWrapper">
          <input
            className="searchInput"
            name="searchInput"
            type="text"
            onChange={inputHandler}
          />
          <button
            className="searchBtn"
            type="button"
            onClick={queryHandler && listHandler}
          >
            →
          </button>
        </div>
      </div>
      {showList && <SearchList searchData={searchData} />}
    </div>
  );
};

export default Search;
