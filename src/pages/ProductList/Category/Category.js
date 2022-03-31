import React from 'react';
import Product from './Product/Product';
import './Category.scss';

const Category = ({
  categoryId,
  categoryName,
  categoryDescription,
  products,
  evenCategory,
}) => {
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
        {products.map(product => {
          return <Product key={product.productId} {...product} />;
        })}
      </div>
    </div>
  );
};

export default Category;
