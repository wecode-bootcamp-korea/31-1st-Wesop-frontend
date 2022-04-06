import React from 'react';
import { Link } from 'react-router-dom';
import './ProductDetailSection.scss';

function ProductDetailSection({ mainDescription, changeModalHandler }) {
  const { category, name, descriptrion, size, price, product_imges } =
    mainDescription;

  return (
    <div className="productDetailSection">
      <img className="productDetailImg" src={product_imges} alt="스킨" />
      <div className="productDetailSectionContainer">
        <div className="productDetailCategory">
          <ui className="categoryTag">
            <Link to="/" className="categoryLink">
              스킨
            </Link>
            <li />
            <Link to="/" className="subCategoryLink">
              {category}
            </Link>
          </ui>
        </div>
        <div>
          <p className="productDetailName">{name}</p>
          <p className="productDescription">{descriptrion}</p>
          {PRODUCT_CONTENT.map(data => (
            <div className="productInformation" key={data.id}>
              <p>{data.content}</p>
              <p>{mainDescription[data.name]}</p>
            </div>
          ))}
          <i
            onClick={changeModalHandler}
            className="fa-regular fa-square-plus"
          />
          <div className="productModule">
            <div className="productSize">
              <p>사이즈</p>
              <p>{size}</p>
            </div>
            <div>
              <button className="shoppingCartButton">
                카트에 추가하기 - ₩ {price}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetailSection;

const PRODUCT_CONTENT = [
  {
    id: 1,
    content: '피부타입',
    name: 'skin_type',
  },
  {
    id: 2,
    content: '사용감',
    name: 'feeling',
  },
  {
    id: 3,
    content: '주요성분',
    name: 'main_ingredients',
  },
];
