import React, { useState } from 'react';
import ProductDetail from '../ProductDetail/ProductDetail';

export default function ProductDetailModal() {
  const [modal, setModal] = useState(true);

  function handleCloseButton() {
    setModal(false);
  }

  return (
    <div className="modalContainer">
      <div className="mainIngredientModalTextContainer">
        <i onClick={handleCloseButton} className="fa-solid fa-x" />
        <div className="ingredientContainer">
          <p className="ingredientSpacing">성분</p>
          <p className="ingrdSpcng">
            포도씨오일, 해바라기씨오일, 토코페롤, 마트리카리아꽃오일
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
      <div className="modalOverlay" />
      {modal === false ? <ProductDetail /> : null}
    </div>
  );
}
