import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SearchList from './SearchList';
import './Search.scss';

const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [data, setData] = useState({});
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    fetch(`http://10.58.1.236:8000/products?search=${decodeLocation}`)
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  const inputHandler = e => {
    setSearchInput(e.target.value);
  };

  const queryHandler = () => {
    const queryString = `?searchMenu=open&search=${searchInput}`;
    navigate(queryString);
  };

  const decodeLocation = decodeURI(location.search);
  // const inputValidCheck = searchInput.length > 1 && data.includes(searchInput);

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
          <button className="searchBtn" type="button" onClick={queryHandler}>
            →
          </button>
        </div>
      </div>
      <SearchList />
    </div>
  );
};

export default Search;
