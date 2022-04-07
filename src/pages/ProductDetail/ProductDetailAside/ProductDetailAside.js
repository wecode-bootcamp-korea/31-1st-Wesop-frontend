import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductDetailAside.scss';

function ProductDetailAside({ product }) {
  const navigate = useNavigate();
  const { image, name, skintype } = product;

  return (
    <div className="asideListImgContainer">
      <img className="asideListImg" alt="스킨" src={image} />
      <div className="introductionItem">
        <p>{name}</p>
        <p>{skintype}</p>
      </div>
    </div>
  );
}
export default ProductDetailAside;
