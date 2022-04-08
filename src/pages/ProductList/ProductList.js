import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ProductListLayout from './ProductListLayout/ProductListLayout';
import FilterOpen from './FilterOpen/FilterOpen';
import Category from './Category/Category';
import CategoryList from './CategoryList/CategoryList';
import './ProductList.scss';

const ProductList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [productList, setProductList] = useState([]);
  const [categoryInfo, setCategoryInfo] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categoryUrl =
    location.search === '' ? '' : `/${location.search.split('=')[1]}`;

  useEffect(() => {
    fetch(`http://10.58.6.255:8000/products/categories${categoryUrl}`)
      .then(res => res.json())
      .then(data => setCategoryInfo(data.result));
  }, [categoryUrl]);

  useEffect(() => {
    fetch(`http://10.58.6.255:8000/products${location.search}`)
      .then(res => res.json())
      .then(data => setProductList(data.result));
  }, [location.search]);

  const filterClickHandler = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const goToAllSkin = () => {
    navigate('/productlist');
  };

  const updateUrl = id => {
    const queryString = `?category_id=${id}`;
    navigate(queryString);
  };

  const productsForEachCategory = id =>
    productList.filter(product => product.category.categoryId === id);

  return (
    <ProductListLayout productList={productList}>
      <h1 className="mainCategory">
        {location.search === '' ? '스킨' : categoryInfo.categoryName}
      </h1>
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
      {location.search === '' ? (
        <main className="mainContent">
          {categoryInfo.length === 11 &&
            categoryInfo.map(
              ({ categoryId, categoryName, categoryDescription }) => {
                return (
                  <Category
                    key={categoryId}
                    category={{
                      categoryId,
                      categoryName,
                      categoryDescription,
                    }}
                    products={productsForEachCategory(categoryId)}
                  />
                );
              }
            )}
        </main>
      ) : (
        <CategoryList categoryInfo={categoryInfo} productList={productList} />
      )}
    </ProductListLayout>
  );
};

const CATEGORY_LIST = [
  { categoryId: 1, categoryName: '클렌저' },
  { categoryId: 2, categoryName: '각질 제거' },
  { categoryId: 3, categoryName: '트리트먼트&마스크' },
  { categoryId: 4, categoryName: '토너' },
  { categoryId: 5, categoryName: '하이드레이터' },
  { categoryId: 6, categoryName: '립&아이' },
  { categoryId: 7, categoryName: '쉐이빙' },
  { categoryId: 8, categoryName: '선 케어' },
  { categoryId: 9, categoryName: '키트' },
  { categoryId: 10, categoryName: '스킨 케어 세트 추천' },
  { categoryId: 11, categoryName: '스킨 케어 기프트' },
];
export default ProductList;
