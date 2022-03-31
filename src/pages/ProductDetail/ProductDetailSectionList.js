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
        <p className="productDetailSpaces">피부타입</p>
        <p className="productDetailExplanation">{product.skinType}</p>
      </div>
      <div className="productDetailUnderlined">
        <p className="productDetailSpaces">사용감</p>
        <p className="productDetailExplanation">{product.feelingUse}</p>
      </div>
      <div className="productDetailUnderlined">
        <p className="productDetailSpaces">주요성분</p>
        <p className="productDetailExplanation">{product.mainIngredient}</p>
      </div>
      <div className="productDetailUndrl">
        <p className="productDetailSpaces">사이즈</p>
        <p className="productDetailExplanation">{product.size}</p>
      </div>
      <button className="shoppingCartButton">카트에 추가하기</button>
      <img className="productDetailImg" alt="스킨" src={product.productImg} />
    </div>
  );
}
export default ProductDetailSectionList;
