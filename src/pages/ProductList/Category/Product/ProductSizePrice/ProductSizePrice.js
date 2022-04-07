import React from 'react';
import './ProductSizePrice.scss';

const ProductSizePrice = ({ productName, size, price }) => {
  return (
    <div className="productSizePrice">
      <div className="productSizePriceName">{productName}</div>
      <div className="productSizePriceInfo">
        <span>{size}</span>
        <span>/</span>
        <span>₩ {Number(price).toLocaleString()}</span>
      </div>
    </div>
  );
};

export default ProductSizePrice;
