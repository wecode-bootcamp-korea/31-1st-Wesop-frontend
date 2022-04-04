import React from 'react';
import './ProductDetailAside.scss';

function ProductDetailAside({ product }) {
  return (
    <div className="asideListImgContainer">
      <img className="asideListImg" alt="스킨" src={product.image} />
      <div className="introductionItem">
        <p>{product.name}</p>
        <p>{product.skintype}</p>
      </div>
    </div>
  );
}
export default ProductDetailAside;
