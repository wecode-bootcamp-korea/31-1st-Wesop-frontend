import React from 'react';

function ProductDetailArticleList({ product }) {
  return (
    <article className="ProductDetailArticle">
      <img
        className="ProductDetailArticleImg"
        alt="스킨"
        src={product.productImg}
      />
      <div className="ProductDetailArticleContainer">
        <div className="howUseUnderline">
          <p className="subDetailFontColor">사용법</p>
          <p className="howUseFontColor">{product.howUse}</p>
        </div>
        <div className="subDetailUnderline">
          <p className="subDetailFontColor">사용량</p>
          <p>{product.usage}</p>
        </div>
        <div className="subDetailUnderline">
          <p className="subDetailFontColor">텍스처</p>
          <p>{product.texture}</p>
        </div>
        <div className="subDetailUnderlined">
          <p className="subDetailFontColor">향</p>
          <p>{product.aroma}</p>
        </div>
      </div>
    </article>
  );
}
export default ProductDetailArticleList;
