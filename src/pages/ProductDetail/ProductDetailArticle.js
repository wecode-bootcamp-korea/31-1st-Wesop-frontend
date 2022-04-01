import React from 'react';

function ProductDetailArticleList({ product }) {
  return (
    <article className="ProductDetailArticle">
      <img
        className="ProductDetailArticleImg"
        alt="스킨"
        src={product.subproductImg}
      />
      <div className="ProductDetailArticleContainer">
        <div className="howUseUnderline">
          <p className="subDetailFontColor">사용법</p>
          <p className="howUseFontColor">{product.사용법}</p>
        </div>
        <div className="subDetailUnderline">
          <p className="subDetailFontColor">사용량</p>
          <p>{product.사용량}</p>
        </div>
        <div className="subDetailUnderline">
          <p className="subDetailFontColor">텍스처</p>
          <p>{product.텍스처}</p>
        </div>
        <div className="subDetailUnderlined">
          <p className="subDetailFontColor">향</p>
          <p>{product.향}</p>
        </div>
      </div>
    </article>
  );
}
export default ProductDetailArticleList;
