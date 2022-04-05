import React, { useState, useEffect } from 'react';
import ProductListLayout from './ProductListLayout/ProductListLayout';
import FilterOpen from './FilterOpen/FilterOpen';
import Category from './Category/Category';
import CategoryList from './CategoryList/CategoryList';
import './ProductList.scss';
import { useLocation, useNavigate } from 'react-router-dom';

const ProductList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [productList, setProductList] = useState([]);
  const [categoryInfo, setCategoryInfo] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const getAllProducts = () => {
    fetch(`http://localhost:3000/data/all-product.json`)
      .then(res => res.json())
      .then(data => setProductList(data));
  };

  const getCategoryInfo = () => {
    fetch(`http://localhost:3000/data/category.json`)
      .then(res => res.json())
      .then(data => setCategoryInfo(data));
  };

  useEffect(() => {
    getCategoryInfo();
    getAllProducts();
  }, []);

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

  const products = id =>
    productList.filter(product => product.category.categoryId === id);

  return (
    <ProductListLayout productList={productList}>
      <h1 className="mainCategory">
        {location.search === '' ? '스킨' : productList[0].categoryName}
      </h1>
      <div className="filter">
        <ul className="filterSubNavContainer">
          <li className="filterSubNavList">
            <button onClick={goToAllSkin} className="filterSubNavBtn">
              모든 스킨
            </button>
          </li>

          {categoryInfo.map(({ categoryId, categoryName }) => {
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
          {categoryInfo.map(
            ({ categoryId, categoryName, categoryDescription }) => {
              return (
                <Category
                  key={categoryId}
                  category={{
                    categoryId,
                    categoryName,
                    categoryDescription,
                  }}
                  products={products(categoryId)}
                />
              );
            }
          )}
        </main>
      ) : (
        //TODO : 추후에는 그냥 'productList'로 변경해주고, fetch하는 부분에서 쿼리스트링으로 해당 카테고리에 대한 데이터만 받아오기
        <CategoryList productList={productList[0]} />
      )}
    </ProductListLayout>
  );
};

export default ProductList;
