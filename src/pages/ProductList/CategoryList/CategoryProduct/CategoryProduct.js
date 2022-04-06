import React from 'react';
import ProductSizePrice from '../../Category/Product/ProductSizePrice/ProductSizePrice';
import './CategoryProduct.scss';

const CategoryProduct = ({
  products: { id, productName, size, price, url, skin_type, feeling },
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
          <span className="content">{skin_type[0]}</span>
        </div>
        <div className="description">
          <span className="title">사용감</span>
          <span className="content">{feeling.join(', ')}</span>
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
