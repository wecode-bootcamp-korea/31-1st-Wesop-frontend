import React, { useState, useEffect } from 'react';
import ProductListLayout from './ProductListLayout/ProductListLayout';
import FilterOpen from './FilterOpen/FilterOpen';
import Category from './Category/Category';
import './ProductList.scss';
import { useLocation, useNavigate } from 'react-router-dom';

const ProductList = () => {
  const [productList, setProductList] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3000/data/${location.search}`)
      .then(res => res.json())
      .then(data => setProductList(data));
  }, [location.search]);

  const filterClickHandler = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const goToAllSkin = () => {
    navigate('/product-list');
  };

  const updateUrl = id => {
    const queryString = `?category_id=${id}`;
    navigate(queryString);
  };

  return (
    <ProductListLayout productList={productList}>
      <h1 className="mainCategory">스킨</h1>
      <div className="filter">
        <ul className="filterSubNavContainer">
          <li className="filterSubNavList">
            <button onClick={goToAllSkin} className="filterSubNavBtn">
              모든 스킨
            </button>
          </li>

          {CATEGORY_LIST.map(({ categoryId, categoryName }) => {
            return (
              <li key={categoryId} className="filterSubNavList">
                <button
                  onClick={() => {
                    updateUrl(categoryId);
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
      <main className="mainContent">
        {productList.map(
          ({ categoryId, categoryName, categoryDescription, products }) => {
            return (
              <Category
                key={categoryId}
                category={{
                  categoryId,
                  categoryName,
                  categoryDescription,
                  products,
                }}
              />
            );
          }
        )}
      </main>
    </ProductListLayout>
  );
};

const CATEGORY_LIST = [
  {
    categoryId: 1,
    categoryName: '클렌저',
  },
  {
    categoryId: 2,
    categoryName: '각질제거',
  },
  {
    categoryId: 3,
    categoryName: '트리트먼트&마스크',
  },
  {
    categoryId: 4,
    categoryName: '토너',
  },
  {
    categoryId: 5,
    categoryName: '하이드레이터',
  },
];

export default ProductList;
