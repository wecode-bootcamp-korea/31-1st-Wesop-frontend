import React from 'react';
import { Link } from 'react-router-dom';
import './Product.scss';

const Product = ({ badge, productName, size, price, url }) => {
  return (
    <div className="product">
      <div className="productBadgeWrapper">{badge}</div>
      <div className="productImageWrapper">
        <Link to="#">
          <img className="productImage" alt="product" src={url} />
        </Link>
      </div>
      <div className="productSizePrice">
        <div className="productSizePriceName">{productName}</div>
        <div className="productSizePriceInfo">
          <span>{size}</span>
          <span>/</span>
          <span>₩ {price}</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
