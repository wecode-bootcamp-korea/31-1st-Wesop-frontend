import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductSizePrice from '../../Category/Product/ProductSizePrice/ProductSizePrice';
import API from '../../../../config/config';
import './CategoryProduct.scss';

const CategoryProduct = ({
  products: { id, productName, size, price, url, skin_type, feeling },
}) => {
  const navigate = useNavigate();
  const goToDetail = () => {
    navigate(`/products/${id}`);
  };

  const postItemToCartInServer = () => {
    fetch(API.cartMainAddress, {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({ product_id: id }),
    }).then(() => {
      alert('카트에 아이템이 추가되었습니다.');
    });
  };

  return (
    <div className="categoryProduct">
      <div className="productImgInfoWrapper" onClick={goToDetail}>
        <div className="imgWrapper">
          <img alt="category-product" src={url} />
        </div>
        <ProductSizePrice productName={productName} size={size} price={price} />
      </div>
      <div className="descriptionWrapper">
        <div className="description">
          <span className="title">피부타입</span>
          <span className="content">{skin_type[0]}</span>
        </div>
        <div className="description">
          <span className="title">사용감</span>
          <span className="content">{feeling.join(', ')}</span>
        </div>
      </div>
      <button className="addToCart" onClick={postItemToCartInServer}>
        <span className="btnText">
          카트에 추가 - ₩ {Number(price).toLocaleString()}
        </span>
      </button>
    </div>
  );
};

export default CategoryProduct;
