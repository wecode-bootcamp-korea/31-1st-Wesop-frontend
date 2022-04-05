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
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/data/category.json')
      .then(res => res.json())
      .then(data => {
        const categoryArr = [];
        for (let product of data) {
          categoryArr.push(product.category);
        }
        const map = new Map();
        for (const category of categoryArr) {
          map.set(JSON.stringify(category), category);
        }
        const category = [...map.values()];
        for (let i = 0; i < category.length; i++) {
          const newArr = data.filter(
            item => item.category.categoryId === i + 1
          );
          category[i].products = newArr;
        }
        setProductList(category);
      });
  }, []);

  // TODO: 백엔드와 통신코드 추후 수정하기 (객체 형태로 받는 걸 배열인 뒤의 value 값만 받아서 해야 하는데 확인 필요함)
  // useEffect(() => {
  //   fetch(`http://localhost:3000/data/${location.search}`)
  //     .then(res => res.json())
  //     .then(data.result => {
  //       const categoryArr = [];
  //       for (let x of data.result) {
  //         categoryArr.push(x.category);
  //       }
  //       const map = new Map();
  //       for (const category of categoryArr) {
  //         map.set(JSON.stringify(category), category);
  //       }
  //       const category = [...map.values()];
  //       for (let i = 0; i < category.length; i++) {
  //         const newArr = data.result.filter(
  //           item => item.category.categoryId === i + 1
  //         );
  //         category[i].products = newArr;
  //       }
  //       setProductList(category);
  //     });
  // }, [location.search]);

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
      ) : (
        //TODO : 추후에는 그냥 'productList'로 변경해주고, fetch하는 부분에서 쿼리스트링으로 해당 카테고리에 대한 데이터만 받아오기
        <CategoryList productList={productList[0]} />
      )}
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
  {
    categoryId: 6,
    categoryName: '립&아이',
  },
  {
    categoryId: 7,
    categoryName: '쉐이빙',
  },
  {
    categoryId: 8,
    categoryName: '선 케어',
  },
  {
    categoryId: 9,
    categoryName: '키트',
  },
  {
    categoryId: 10,
    categoryName: '스킨 케어 세트 추천',
  },
  {
    categoryId: 11,
    categoryName: '스킨 케어 기프트',
  },
];

export default ProductList;
