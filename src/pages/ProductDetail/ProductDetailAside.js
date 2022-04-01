import React from 'react';

function ProductDetailAsideList({ product }) {
  return (
    <div className="AsideListImgContainer">
      <img className="AsideListImg" alt="스킨" src={product.image} />
      <div className="introductionItem">
        <p>{product.name}</p>
        <p>{product.skintype}</p>
      </div>
    </div>
  );
}
export default ProductDetailAsideList;
