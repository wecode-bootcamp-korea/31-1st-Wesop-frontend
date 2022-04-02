import React, { useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import FilterOpen from '../FilterOpen/FilterOpen';
import './Filter.scss';

const Filter = ({ productList }) => {
  const navigate = useNavigate();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterClickHandler = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const goToAllSkin = () => {
    navigate('/product-list');
  };

  return (
    <>
      <div className="filter">
        <ul className="filterSubNavContainer">
          <li className="filterSubNavList">
            <button onclick={goToAllSkin} className="filterSubNavBtn">
              모든 스킨
            </button>
          </li>

          {productList.map(({ categoryId, categoryName }) => {
            //TODO : 추후 백엔드에서 받아오는 데이터로 변경 필요
            return (
              <li key={categoryId} className="filterSubNavList">
                <button
                  onClick={() => {
                    navigate(`/product-list/${categoryId}`);
                  }}
                  className="filterSubNavBtn"
                >
                  {categoryName}
                </button>
              </li>
            );
          })}
        </ul>
        <div className="filterBtnContainer">
          {isFilterOpen ? (
            <button onClick={filterClickHandler} className="filterXBtn">
              <span>
                <i className="fa-solid fa-xmark" />
              </span>
            </button>
          ) : (
            <button onClick={filterClickHandler} className="filterBtn">
              <span className="filterBtnText">필터</span>
              <span>
                <i className="fa-solid fa-angle-down filterBtnIcon" />
              </span>
            </button>
          )}
        </div>
      </div>
      {isFilterOpen && <FilterOpen />}
      <Outlet />
    </>
  );
};

export default Filter;
