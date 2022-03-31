import React from 'react';

function ProductDetailSectionList({ product }) {
  return (
    <div className="productDetailSectionList">
      <div className="productDetailCategory">
        <span>스킨</span>
        <span>클렌저</span>
      </div>
      <div className="productDetailSpaces">
        <p className="productDetailName">{product.productName}</p>
      </div>
      <div className="productDetailUnderline">
        <p className="productDetailExplanation">{product.productDescription}</p>
      </div>
      <div className="productDetailUnderlined">
        <p className="productDetailSpaces">{product.skinType}</p>
        <p className="productDetailExplanation">{product.sknTyp}</p>
      </div>
      <div className="productDetailUnderlined">
        <p className="productDetailSpaces">{product.feelingUse}</p>
        <p className="productDetailExplanation">{product.flngUse}</p>
      </div>
      <div className="productDetailUnderlined">
        <p className="productDetailSpaces">{product.mainIngredient}</p>
        <p className="productDetailExplanation">{product.mainIngrd}</p>
      </div>
      <div className="productDetailUndrl">
        <p className="productDetailSpaces">{product.size}</p>
        <p className="productDetailExplanation">{product.siz}</p>
      </div>
      <button className="shoppingCartButton">카트에 추가하기</button>
      <img className="productDetailImg" alt="스킨" src={product.productImg} />
    </div>
  );
}
export default ProductDetailSectionList;
