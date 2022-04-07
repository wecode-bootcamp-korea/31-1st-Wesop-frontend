import React from 'react';
import { Link } from 'react-router-dom';
import './ProductDetailSection.scss';
import { CART_SERVER_ADDRESS } from '../../../config/config';

function ProductDetailSection({ mainDescription, changeModalHandler }) {
  const { category, name, descriptrion, size, price, product_imges } =
    mainDescription;

  const { cartMainAddress } = CART_SERVER_ADDRESS;

  // TODO: 이 페이지에 productId가 수현님한테서 받아서 넣을수 있는 상태가 되면 이 밑에 인자로 넣고
  // 안에 있는 product_id: 안에 value값으로 그 값을 주면 됩니다.
  const postItemToCartInServer = () => {
    fetch(cartMainAddress, {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({ product_id: 20 }),
    });
  };

  const addItemToServerCartHandler = () => {
    if (!localStorage.getItem('token')) {
      alert('장바구니 기능을 이용하시려면 로그인 해주세요.');
    } else {
      postItemToCartInServer();
    }
  };

  return (
    <div className="productDetailSection">
      <img className="productDetailImg" src={product_imges} alt="스킨" />
      <div className="productDetailSectionContainer">
        <div className="productDetailCategory">
          <ul className="categoryTag">
            <Link to="/" className="categoryLink">
              스킨
            </Link>
            <li />
            <Link to="/" className="subCategoryLink">
              {category}
            </Link>
          </ul>
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
              <button
                className="shoppingCartButton"
                onClick={addItemToServerCartHandler}
              >
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
