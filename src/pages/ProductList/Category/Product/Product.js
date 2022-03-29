import React from 'react';
import { Link } from 'react-router-dom';
import './Product.scss';

const Product = () => {
  return (
    <div className="product">
      <div className="productBadgeWrapper">데일리 필수품</div>
      <div className="productImageWrapper">
        <Link to="#">
          <img
            className="productImage"
            alt="product"
            src="https://www.aesop.com/medias/Aesop-Skin-Parsley-Seed-Facial-Cleansing-Oil-200mL-large.png?context=bWFzdGVyfGltYWdlc3w0NjU2MDh8aW1hZ2UvcG5nfGltYWdlcy9oMzIvaDVlLzg3OTc0Mzg4MzY3NjYucG5nfDhkZDUxNWE3YWI1YjgwMjdjNGQ3YTcxMjU4MzNhYWM0ZTM5YzViODRmZmMwOTQ1ODRmMGMzNzI1NGZjMzk1ODc"
          />
        </Link>
      </div>
      <div className="productSizePrice">
        <div className="productSizePriceName">
          파슬리 씨드 페이셜 클렌징 오일
        </div>
        <div className="productSizePriceInfo">
          <span>200 mL</span>
          <span>/</span>
          <span>₩ 27,000</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
