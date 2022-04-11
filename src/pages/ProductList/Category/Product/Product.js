import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Product.scss';
import ProductSizePrice from './ProductSizePrice/ProductSizePrice';

const Product = ({ product: { badge, productName, size, price, url }, id }) => {
  const navigate = useNavigate();
  const goToDetail = () => {
    navigate(`/products/${id}`);
  };

  return (
    <div className="product" onClick={goToDetail}>
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
