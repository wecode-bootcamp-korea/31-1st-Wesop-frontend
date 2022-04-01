import React from 'react';

function ProductDetailSectionList({ product }) {
  return (
    <div className="productDetailSectionList">
      <div className="productDetailCategory">
        <span>스킨</span>
        <span>{product.category}</span>
      </div>
      <div className="productDetailSpaces">
        <p className="productDetailName">{product.name}</p>
      </div>
      <div className="productDetailUnderline">
        <p className="productDetailExplanation">{product.descriptrion}</p>
      </div>
      <div className="productDetailUnderlined">
        <p className="productDetailSpaces">피부타입</p>
        <p className="productDetailExplanation">{product.skin_type}</p>
      </div>
      <div className="productDetailUnderlined">
        <p className="productDetailSpaces">사용감</p>
        <p className="productDetailExplanation">{product.feeling}</p>
      </div>
      <div className="productDetailUnderlined">
        <p className="productDetailSpaces">주요성분</p>
        <p className="productDetailExplanation">
          {product.main_ingredients[0].main_ingredients}
        </p>
      </div>
      <div className="productDetailUndrl">
        <p className="productDetailSpaces">사이즈</p>
        <p className="productDetailExplanation">{product.size}</p>
      </div>
      <button className="shoppingCartButton">
        카트에 추가하기 - ₩{product.price}
      </button>
      <img
        className="productDetailImg"
        alt="스킨"
        src={product.product_imges}
      />
    </div>
  );
}
export default ProductDetailSectionList;
