import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SearchList from './SearchList';
import SearchImage from './SearchImage';
import './Search.scss';

const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [data, setData] = useState({});
  const [searchInput, setSearchInput] = useState('');
  const [listHover, setListHover] = useState(false);

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
        <SearchList setListHover={setListHover} />
      </div>
      <div className="searchImage">{listHover && <SearchImage />}</div>
    </div>
  );
};

export default Search;
