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
    fetch('https://node-pagnation.herokuapp.com/users')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  const inputHandler = e => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    const queryString = `?searchMenu=open&search=${searchInput}`;
    navigate(queryString);
  }, [searchInput]);

  console.log(location.search);

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
          <button className="searchBtn">→</button>
        </div>
      </div>
      <div className="searchList">
        <SearchList />
      </div>
      <div className="searchImage">이미지</div>
    </div>
  );
};

export default Search;
