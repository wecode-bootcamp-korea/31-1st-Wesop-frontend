import React from 'react';

function ProductDetailSectionList({ mainDescription }) {
  const {
    category,
    name,
    descriptrion,
    skin_type,
    feeling,
    main_ingredients,
    size,
    price,
    product_imges,
  } = mainDescription;
  return (
    <div className="productDetailSectionList">
      <div className="productDetailCategory">
        <div className="productDetailUndrl">
          <span>스킨 {category}</span>
        </div>
        <div className="productDetailSpaces">
          <p className="productDetailName">{name}</p>
          <div className="productDetailUnderline">
            <p className="productDetailExplanation">{descriptrion}</p>
          </div>
        </div>
        <div className="productDetailUnderlined">
          <p className="productDetailSpaces">피부타입</p>
          <p className="productDetailExplanation">{skin_type}</p>
        </div>
        <div className="productDetailUnderlined">
          <p className="productDetailSpaces">사용감</p>
          <p className="productDetailExplanation">{feeling}</p>
        </div>
        <div className="productDetailUnderlined">
          <p className="productDetailSpaces">주요성분</p>
          <p className="productDetailExplanation">
            {main_ingredients.map((ingredient, i) => (
              <span key={i}>{ingredient}, </span>
            ))}
          </p>
        </div>
        <div className="productDetailUndrl">
          <p className="productDetailSpaces">사이즈</p>
          <p className="productDetailExplanation">{size}</p>
        </div>
      </div>
      <button className="shoppingCartButton">
        카트에 추가하기 - ₩ {price}
      </button>
      <img className="productDetailImg" src={product_imges} />
    </div>
  );
}
export default ProductDetailSectionList;
