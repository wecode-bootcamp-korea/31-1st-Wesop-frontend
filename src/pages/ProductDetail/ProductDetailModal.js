import React from 'react';

function ProductDetailModal({ onChangeModal, data }) {
  return (
    <div className="modalContainer">
      <div className="mainIngredientModalTextContainer">
        <i className="fa-solid fa-x" onClick={onChangeModal} />
        <div className="ingredientContainer">
          <p className="ingredientSpacing">성분</p>
          <p className="ingrdSpcng">
            {data[0].main_ingredients[0].ingredients}
          </p>
          <p className="ingrdSpcng">
            성분 목록은 변경될 수 있습니다. 구매하신 제품에 대한 정확한 성분
            목록은, 사용 전 제품 라벨을 참조하시기 바랍니다.
          </p>
          <p>
            이솝은 PETA로부터 비건 인증을 받은 브랜드로 자체 안전성과 효능,
            지속가능성을 확인한 성분을 사용합니다.
          </p>
        </div>
      </div>
      <div className="modalOverlay" onClick={onChangeModal} />
    </div>
  );
}
export default ProductDetailModal;
