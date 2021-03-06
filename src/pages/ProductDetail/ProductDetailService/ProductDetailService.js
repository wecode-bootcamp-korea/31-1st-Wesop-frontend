import React from 'react';
import './ProductDetailService.scss';

function ProductDetailService() {
  return (
    <section className="productDetailService">
      <div className="productDetailServiceMessage">
        <span className="serviceGift">무료 선물 포장 서비스</span>
        <br />
        주문하신 모든 제품에 대해 선물 포장 서비스를 제공해 드립니다.
      </div>
      <div className="productDetailServiceMessage">
        <span className="serviceGift">샘플 & 코튼 백 증정</span>
        <br />
        모든 주문 건에 무료 샘플과 코튼 백을 제공해 드립니다. <br />
        (샘플 종류는 임의 지정이 불가합니다.)
      </div>
    </section>
  );
}
export default ProductDetailService;
