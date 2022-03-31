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
          <p className="subDetailFontColor">{product.howUse}</p>
          <p className="howUseFontColor">{product.howToUse}</p>
        </div>
        <div className="subDetailUnderline">
          <p className="subDetailFontColor">{product.usage}</p>
          <p>{product.usg}</p>
        </div>
        <div className="subDetailUnderline">
          <p className="subDetailFontColor">{product.texture}</p>
          <p>{product.trtr}</p>
        </div>
        <div className="subDetailUnderlined">
          <p className="subDetailFontColor">{product.arm}</p>
          <p>{product.aroma}</p>
        </div>
      </div>
    </article>
  );
}
export default ProductDetailArticleList;
