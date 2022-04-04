import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ProductListLayout from '../ProductListLayout/ProductListLayout';
import Filter from '../FIlter/Filter';
import ProductSizePrice from '../Category/Product/ProductSizePrice/ProductSizePrice';
import './CategoryList.scss';

const CategoryList = () => {
  const navaigate = useNavigate();
  // const params = useParams();
  const [categoryProducts, setCategoryProducts] = useState([]);

  //TODO : 추후 통신코드로 변경, 우선 아래 데이터 임의반영
  useEffect(() => {
    setCategoryProducts(CATEGORY_PRODUCTS);
  }, []);
  // useEffect(() => {
  //   fetch(`http:// :8000/product-list/${params.categoryId}`)
  //     .then(res => res.json())
  //     .then(data => setCategoryProducts(data));
  // }, []);

  const goToProductInfo = () => {
    navaigate('/');
  };

  return (
    <ProductListLayout>
      <h1 className="mainCategory">{categoryProducts.categoryName}</h1>
      <Filter />
      <main className="productsWrapper">
        <div className="categoryTitleWrapper">
          <h2 class="CPSubcatIntroDescription-headline">처음의 시작</h2>
          <p class="CPSubcatIntroDescription-info">
            각질, 불필요한 유분 그리고 기타 잔여물을 말끔히 씻어내어 피부를
            깨끗하게 하는 것은 인텔리전트 스킨케어의 기초입니다.
          </p>
          <div className="categoryProductWrapper">
            <div className="productImgInfoWrapper" onClick={goToProductInfo}>
              <div className="imgWrapper">
                <img
                  alt="category-product"
                  src="/images/productList/투명배경1.png"
                />
              </div>
              <ProductSizePrice
                productName="리무브"
                size="60 mL"
                price="27000"
              />
            </div>
            <div className="divisionLine" />
            <div className="description">
              <span className="title">피부타입</span>
              <span className="content">모든 피부, 메이크업을 한 피부</span>
            </div>
            <div className="description">
              <span className="title">사용감</span>
              <span className="content">진정된, 생기있는</span>
            </div>
          </div>
          <div className="categoryProductWrapper">
            <div className="productImgInfoWrapper" onClick={goToProductInfo}>
              <div className="imgWrapper">
                <img
                  alt="category-product"
                  src="/images/productList/투명배경1.png"
                />
              </div>
              <ProductSizePrice
                productName="리무브"
                size="60 mL"
                price="27000"
              />
            </div>
            <div className="divisionLine" />
            <div className="description">
              <span className="title">피부타입</span>
              <span className="content">모든 피부, 메이크업을 한 피부</span>
            </div>
            <div className="description">
              <span className="title">사용감</span>
              <span className="content">진정된, 생기있는</span>
            </div>
          </div>
        </div>
      </main>
    </ProductListLayout>
  );
};

const CATEGORY_PRODUCTS = {
  categoryId: 1,
  categoryName: '클렌저',
  categoryDescription:
    '피부의 남은 각질, 불필요한 유분 그리고 기타 잔여물을 말끔히 씻어내어 피부를 깨끗하게 하는 것은 인텔리전트 스킨케어의 기초입니다.',
  products: [
    {
      productId: 1,
      badge: '',
      productName: '리무브',
      size: '60 mL',
      price: '40000.00',
      url: '/images/productList/투명배경1.png',
    },
    {
      productId: 2,
      badge: '사랑받는기프트',
      productName: '퓨리파잉 페이셜 크림 클렌저',
      size: '100 mL',
      price: '27000',
      url: '/images/productList/투명배경2.png',
    },
    {
      productId: 3,
      badge: '',
      productName: '페뷸러스 페이스 클렌저',
      size: '2 사이즈',
      price: '40000',
      url: '/images/productList/투명배경3.png',
    },
    {
      productId: 4,
      badge: '사랑받는기프트',
      productName: '파슬리 씨드 페이셜 클렌저',
      size: '2 사이즈',
      price: '45000 원부터',
      url: '/images/productList/투명배경4.png',
    },
    {
      productId: 5,
      badge: '',
      productName: '건성 피부용 메이크업 리무버 듀오',
      size: '2 사이즈',
      price: '40000',
      url: '/images/productList/투명배경5.png',
    },
  ],
};

export default CategoryList;
