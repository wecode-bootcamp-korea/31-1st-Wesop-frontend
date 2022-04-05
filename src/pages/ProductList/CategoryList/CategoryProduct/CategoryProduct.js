import React from 'react';
import ProductSizePrice from '../../Category/Product/ProductSizePrice/ProductSizePrice';
import './CategoryProduct.scss';

const CategoryProduct = ({
  products: { id, productName, size, price, url },
}) => {
  return (
    <div className="categoryProduct">
      <div className="productImgInfoWrapper">
        <div className="imgWrapper">
          <img alt="category-product" src={url} />
        </div>
        <ProductSizePrice productName={productName} size={size} price={price} />
      </div>
      <div className="descriptionWrapper">
        <div className="description">
          {/* // TODO: 백엔드 데이터 확인해서 넣기 */}
          <span className="title">피부타입</span>
          <span className="content">모든 피부, 메이크업을 한 피부</span>
        </div>
        <div className="description">
          <span className="title">사용감</span>
          <span className="content">진정된, 생기있는</span>
        </div>
      </div>
      <button className="addToCart">
        <span className="btnText">
          카트에 추가 - ₩ {Number(price).toLocaleString()}
        </span>
      </button>
    </div>
  );
};

export default CategoryProduct;
