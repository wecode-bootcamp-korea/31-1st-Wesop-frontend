import React from 'react';

function ProductDetailArticle({ subDescription }) {
  const { 사용법, 사용량, 텍스처, 향, subproductImg } = subDescription;

  return (
    <div className="ProductDetailArticle">
      <div className="DetailArticleImg">
        <img
          className="ProductDetailArticleImg"
          alt="스킨"
          src={subproductImg}
        />
      </div>
      <div className="ProductDetailArticleContainer">
        <div className="howUseUnderlined">
          <p className="subDetailFontColor">사용법</p>
          <p className="howUseFontColor">{사용법}</p>
        </div>
        <div className="subDetailUnderline">
          <p className="subDetailFontColor">사용량</p>
          <p>{사용량}</p>
        </div>
        <div className="subDetailUnderline">
          <p className="subDetailFontColor">텍스처</p>
          <p>{텍스처}</p>
        </div>
        <div>
          <p className="subDetailFontColor">향</p>
          <p>{향}</p>
        </div>
      </div>
    </div>
  );
}
export default ProductDetailArticle;
