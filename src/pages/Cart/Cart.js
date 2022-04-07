import React, { useState, useEffect } from 'react';
import CartItemList from './CartItemList';
import { CART_SERVER_ADDRESS } from '../../config/config';
import './Cart.scss';

const { cartMainAddress } = CART_SERVER_ADDRESS;

const Cart = ({ onCloseCartModal }) => {
  const [cartList, setCartList] = useState([]);
  const [cartListTotalPrice, setCartListTotalPrice] = useState(0);

  const getRemoteCartList = () => {
    fetch(cartMainAddress, {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(setCartListTotalPrice(0))
      .then(res => {
        setCartList(res.message);
      });
  };

  const deletedCartItemToServer = deleteProductId => {
    fetch(`${cartMainAddress}?cart_ids=${deleteProductId}`, {
      method: 'DELETE',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    }).then(setTimeout(() => getRemoteCartList(), 300));
  };

  const addPriceToCartListTotalPriceHandler = price => {
    setCartListTotalPrice(
      prevcartListTotalPrice => (prevcartListTotalPrice += price)
    );
  };

  useEffect(() => {
    getRemoteCartList();
  }, []);

  return (
    <div className="cart">
      <div className="cartProducts">
        <div className="cartHeader">
          <span className="cartHeaderTitleLabel">카트</span>
          <span className="cartHeaderSizeLabel">사이즈</span>
          <span className="cartHeaderProductLabel">수량</span>
          <button
            className="cartHeaderCloseBtn"
            type="button"
            onClick={onCloseCartModal}
          >
            <i className="fa-solid fa-xmark" />
          </button>
        </div>
        <ul className="cartProductList">
          {cartList !== 'INVALID_USER' &&
            cartList.map(cartItem => (
              <CartItemList
                key={cartItem.productId}
                cartItem={cartItem}
                deletedCartItemToServer={deletedCartItemToServer}
                onAddToTotalPrice={addPriceToCartListTotalPriceHandler}
                getRemoteCartList={getRemoteCartList}
                cartList={cartList}
              />
            ))}
        </ul>
      </div>
      <div className="cartSummary">
        <div className="cartSummaryMsg">
          <span>전 제품 무료 배송 혜택을 즐겨보세요.</span>
        </div>
        <div className="cartSummaryPrice">
          <span className="cartSummaryPriceDescription">소계 (세금 포함)</span>
          <span className="cartSummaryPriceTotal">{`₩ ${cartListTotalPrice}`}</span>
        </div>
        <div className="cartSummarySubmitBtn">
          <button type="button">결제하기</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
