import React from 'react';
import './ProductDetailArticle.scss';
function ProductDetailArticle({ subDescription }) {
  const { 사용법, 사용량, 텍스처, 향, subproductImg } = subDescription;

  const subProductContent = [
    {
      divName: 'howUseUnderlined',
      firstPClassName: 'subDetailFontColor',
      firstString: '사용법',
      secondPClassName: 'howUseFontColor',
      secondString: 사용법,
    },
    {
      divName: 'subDetailUnderline',
      firstPClassName: 'subDetailFontColor',
      firstString: '사용량',
      secondPClassName: 'subDetailContent',
      secondString: 사용량,
    },
    {
      divName: 'subDetailUnderline',
      firstPClassName: 'subDetailFontColor',
      firstString: '텍스처',
      secondPClassName: 'subDetailContent',
      secondString: 텍스처,
    },
    {
      divName: 'subDetailUnderlined',
      firstPClassName: 'subDetailFontColor',
      firstString: '향',
      secondPClassName: 'subDetailContent',
      secondString: 향,
    },
  ];

  return (
    <div className="productDetailArticle">
      <div className="detailArticleImg">
        <img
          className="productDetailArticleImg"
          alt="스킨"
          src={subproductImg}
        />
      </div>
      <div className="productDetailArticleContainer">
        {subProductContent.map(
          ({
            divName,
            firstPClassName,
            firstString,
            secondPClassName,
            secondString,
          }) => (
            <div key={divName} className={divName}>
              <p className={firstPClassName}>{firstString}</p>
              <p className={secondPClassName}>{secondString}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}
export default ProductDetailArticle;
