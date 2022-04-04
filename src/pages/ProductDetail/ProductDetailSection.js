import React from 'react';
import './ProductDetailSection.scss';

function ProductDetailSection({
  mainDescription,
  changeModalHandler,
  goToCategory,
  goToSubCategory,
}) {
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

  const productContent = [
    {
      divClassName: 'productDetailSpaces',
      firstPClassName: 'productDetailName',
      firstString: name,
      secondPClassName: 'productDetailExplanation',
      secondString: descriptrion,
    },
    {
      divClassName: 'productDetailUnderlined',
      firstPClassName: 'productDetailSpaces',
      firstString: '피부타입',
      secondPClassName: 'subDetailContent',
      secondString: skin_type,
    },
    {
      divClassName: 'productDetailUnderlined',
      firstPClassName: 'productDetailSpaces',
      firstString: '피부타입',
      secondPClassName: 'subDetailContent',
      secondString: feeling,
    },
    {
      divClassName: 'productDetailUnderlined',
      firstPClassName: 'productDetailSpaces',
      firstString: '피부타입',
      secondPClassName: 'subDetailContent',
      secondString: main_ingredients,
    },
    {
      divClassName: 'productDetailUnderlined',
      firstPClassName: 'productDetailSpaces',
      firstString: '피부타입',
      secondPClassName: 'subDetailContent',
      secondString: size,
    },
  ];

  return (
    <div className="productDetailSection">
      <div className="productDetailSectionContainer">
        <div className="productDetailCategory">
          <div className="productDetailUndrl">
            <ui className="categoryTeg">
              <span className="categoryLink" onClick={goToCategory}>
                스킨
              </span>
              <li />
              <span className="subCategoryLink" onClick={goToSubCategory}>
                {category}
              </span>
            </ui>
          </div>
          {productContent.map(
            ({
              divClassName,
              firstPClassName,
              firstString,
              secondPClassName,
              secondString,
            }) => (
              <div key={divClassName} className={divClassName}>
                <p className={firstPClassName}>{firstString}</p>
                <p className={secondPClassName}>{secondString}</p>
              </div>
            )
          )}
        </div>
        <button className="shoppingCartButton">
          카트에 추가하기 - ₩ {price}
        </button>
        <i onClick={changeModalHandler} className="fa-regular fa-square-plus" />
        <img className="productDetailImg" src={product_imges} alt="스킨" />
      </div>
    </div>
  );
}
export default ProductDetailSection;
