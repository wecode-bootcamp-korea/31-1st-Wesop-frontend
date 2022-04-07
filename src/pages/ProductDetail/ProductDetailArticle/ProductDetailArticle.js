import React from 'react';
import './ProductDetailArticle.scss';
function ProductDetailArticle({ subDescription }) {
  return (
    <div className="productDetailArticle">
      <div className="detailArticleImg">
        <img
          className="productDetailArticleImg"
          alt="스킨"
          src={subDescription.url}
        />
      </div>
      <div className="productDetailArticleContainer">
        {SUB_PRODUCT_CONTENT.map(data => (
          <div key={data.id} className={data.divClassName}>
            <p className={data.secondPClassName}>{data.name}</p>
            <p className={data.firstPClassName}>
              {subDescription[data.content]}
            </p>
          </div>
        ))}

        {SUB_PRODUCT_CONTENTS.map(data => (
          <div key={data.id} className={data.divClassName}>
            <p className={data.secondPClassName}>{data.name}</p>
            <span className={data.firstPClassName}>
              {subDescription[data.content] && (
                <p>{subDescription[data.content].join(',  ')}</p>
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ProductDetailArticle;

const SUB_PRODUCT_CONTENT = [
  {
    id: 1,
    name: '사용법',
    content: '사용법',
    divClassName: 'howUseUnderline',
    firstPClassName: 'howUseFontColor',
    secondPClassName: 'howUseFontColord',
  },
  {
    id: 2,
    name: '사용량',
    content: '사용량',
    divClassName: 'subDetailContent',
    firstPClassName: 'subDetailUnderline',
    secondPClassName: 'howUseFontColord',
  },
];

const SUB_PRODUCT_CONTENTS = [
  {
    id: 3,
    name: '텍스처',
    content: 'texture',
    divClassName: 'subDetailContent',
    firstPClassName: 'subDetailUnderline',
    secondPClassName: 'howUseFontColord',
  },
  {
    id: 4,
    name: '향',
    content: 'scent',
    divClassName: 'subDetailContent',
    firstPClassName: 'subDetailUnderlined',
    secondPClassName: 'howUseFontColord',
  },
];
