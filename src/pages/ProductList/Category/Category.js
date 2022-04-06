import React, { useState } from 'react';
import Product from './Product/Product';
import './Category.scss';

const Category = ({
  category: { categoryId, categoryName, categoryDescription, products },
}) => {
  const [counter, setCounter] = useState(0);

  const leftBtnClickHandler = () => {
    setCounter(counter - 1);
  };

  const rightBtnClickHandler = () => {
    setCounter(counter + 1);
  };

  let showLeftBtn = counter > 0;
  let showRightBtn = counter !== products.length - 3 && products.length > 3;

  return (
    <div
      className="category"
      style={{ backgroundColor: categoryId % 2 === 0 ? '#ebeade' : '' }}
    >
      <div className="productTitleWrapper">
        <div className="descriptionBox">
          <div className="descriptionTitle">
            <button className="descriptionTitleBtn">{categoryName}</button>
          </div>
          <div className="descriptionText">
            <p>{categoryDescription}</p>
          </div>
        </div>
        <div className="subCategoryIntro">
          <button className="subCategoryIntroBtn">
            <span>
              {categoryName} 모두 보기 ({products.length})
            </span>
            <i className="fas fa-thin fa-arrow-right" />
          </button>
        </div>
      </div>
      <div className="productBodyScrollable">
        <div
          className="products"
          style={{ transform: `translateX(-${27 * counter}%)` }}
        >
          {products.map(product => {
            return <Product key={product.productId} {...product} />;
          })}
        </div>
        {showLeftBtn && (
          <div className="carouselLeft">
            <button
              name="left"
              className="carouselLeftBtn"
              onClick={leftBtnClickHandler}
            >
              <i className="fa-solid fa-chevron-left" />
            </button>
          </div>
        )}
        {showRightBtn && (
          <div className="carouselRight">
            <button
              name="right"
              className="carouselRightBtn"
              onClick={rightBtnClickHandler}
            >
              <i className="fa-solid fa-chevron-right" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Category;
