import React from 'react';
import Product from './Product/Product';
import './Category.scss';

const Category = () => {
  return (
    <div className="category">
      <div className="productTitleWrapper">
        <div className="descriptionBox">
          <div className="descriptionTitle">
            <button className="descriptionTitleBtn">클렌저</button>
          </div>
          <div className="descriptionText">
            <p>
              피부의 남은 각질, 불필요한 유분 그리고 기타 잔여물을 말끔히
              씻어내어 피부를 깨끗하게 하는 것은 인텔리전트 스킨케어의
              기초입니다.
            </p>
          </div>
        </div>
        <div className="subCategoryIntro">
          <button className="subCategoryIntroBtn">
            <span>클렌저 모두 보기(9)</span>
            <i class="fas fa-thin fa-arrow-right" />
          </button>
        </div>
      </div>
      <div className="productBodyScrollable">
        <Product />
      </div>
    </div>
  );
};

export default Category;
