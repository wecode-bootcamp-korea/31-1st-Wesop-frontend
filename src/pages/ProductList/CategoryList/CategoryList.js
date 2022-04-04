import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductSizePrice from '../Category/Product/ProductSizePrice/ProductSizePrice';
import './CategoryList.scss';

const CategoryList = () => {
  const navigate = useNavigate();

  return (
    <main className="productsWrapper">
      <div className="categoryTitleWrapper">
        <h2 class="CPSubcatIntroDescription-headline">처음의 시작</h2>
        <p class="CPSubcatIntroDescription-info">
          각질, 불필요한 유분 그리고 기타 잔여물을 말끔히 씻어내어 피부를
          깨끗하게 하는 것은 인텔리전트 스킨케어의 기초입니다.
        </p>
      </div>
      <div className="categoryProductWrapper">
        <div className="productImgInfoWrapper">
          <div className="imgWrapper">
            <img
              alt="category-product"
              src="/images/productList/투명배경1.png"
            />
          </div>
          <ProductSizePrice productName="리무브" size="60 mL" price="27000" />
        </div>
        <div className="descriptionWrapper">
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
      <div className="categoryProductWrapper">
        <div className="productImgInfoWrapper">
          <div className="imgWrapper">
            <img
              alt="category-product"
              src="/images/productList/투명배경2.png"
            />
          </div>
          <ProductSizePrice productName="리무브" size="60 mL" price="27000" />
        </div>
        <div className="descriptionWrapper">
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
      <div className="categoryProductWrapper">
        <div className="productImgInfoWrapper">
          <div className="imgWrapper">
            <img
              alt="category-product"
              src="/images/productList/투명배경3.png"
            />
          </div>
          <ProductSizePrice productName="리무브" size="60 mL" price="27000" />
        </div>
        <div className="descriptionWrapper">
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
  );
};

export default CategoryList;
