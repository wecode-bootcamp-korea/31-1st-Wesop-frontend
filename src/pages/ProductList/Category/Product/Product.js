import React from 'react';
import { Link } from 'react-router-dom';
import './Product.scss';
import ProductSizePrice from './ProductSizePrice/ProductSizePrice';

const Product = ({ product: { badge, productName, size, price, url } }) => {
  return (
    <div className="product">
      <div className="productBadgeWrapper">{badge}</div>
      <div className="productImageWrapper">
        <Link to="#">
          <img className="productImage" alt="product" src={url} />
        </Link>
      </div>
      <ProductSizePrice productName={productName} size={size} price={price} />
    </div>
  );
};

export default Product;
