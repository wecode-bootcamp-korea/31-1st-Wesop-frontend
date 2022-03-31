import React from 'react';

function ProductDetailAsideList({ product }) {
  return (
    <div>
      <img className="AsideListImg" alt="스킨" src={product.productImg} />
      <div className="introductionItem">
        <p>{product.productName}</p>
        <p>{product.productDescription}</p>
      </div>
    </div>
  );
}
export default ProductDetailAsideList;
