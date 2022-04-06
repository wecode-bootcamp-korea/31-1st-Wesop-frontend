import React, { useState, useEffect } from 'react';
import CartItemList from './CartItemList';
import { CART_SERVER_ADDRESS } from '../../config/config';
import './Cart.scss';

const Cart = ({ cartList, onChangeCartList, onCloseCartModal }) => {
  ////////////////////////////////////////////////////////////////////

  const [cartListTotalPrice, setCartListTotalPrice] = useState(0);
  const { cartMainAddress } = CART_SERVER_ADDRESS;

  // const postLocalCartList = () => {
  //   fetch(cartMainAddress, {
  //     method: 'GET',
  //     headers: {
  //       Authorization: localStorage.getItem('token'),
  //     },
  //     // body: JSON.stringify({ product_id: 1 }),
  //   })
  //     .then(res => res.json())
  //     .then(res => console.log(res));
  // };

  //////////////////////////// 서버에 받아오는거

  const getRemoteCartList = () => {
    fetch(cartMainAddress, {
      // fetch('http://localhost:3000/data/cart_list.json', {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(res => {
        onChangeCartList(res.message);
      });
  };

  useEffect(() => {
    getRemoteCartList();
  }, []);

  // 수정한 state를 바탕으로 백앤드 서버에 보낸다.
  // 배열 전체를 새로 보내야할지 수정사항만 보내야할지에 대해 고민해봐야

  ////////////////////////////////////////////////////////////////////
  const addPriceToCartListTotalPriceHandler = price => {
    setCartListTotalPrice(
      prevcartListTotalPrice => (prevcartListTotalPrice += price)
    );
  };

  const removeAllCartItemsHandler = () => {
    setCartListTotalPrice(0);
    onChangeCartList([]);
  };

  console.log(cartList);

  return (
    <div className="cart">
      <div className="cartProducts">
        <div className="cartHeader">
          <div className="cartHeaderTitleLabel">카트</div>
          <div className="cartHeaderSizeLabel">사이즈</div>
          <div className="cartHeaderProductLabel">수량</div>
          <button
            className="cartHeaderCloseBtn"
            type="button"
            onClick={onCloseCartModal}
          >
            <i className="fa-solid fa-xmark" />
          </button>
        </div>
        <ul className="cartProductList">
          {/* {cartList.map((cartItem, index) => ( */}
          {cartList.map((cartItem, index) => (
            <CartItemList
              key={cartItem.productId}
              cartItem={cartItem}
              cartList={cartList}
              onChangeCartList={onChangeCartList}
              itemIndex={index}
              cartListTotalPrice={cartListTotalPrice}
              onAddToTotalPrice={addPriceToCartListTotalPriceHandler}
            />
          ))}
        </ul>
      </div>
      <div className="cartAllDelete">
        <button
          className="cartAllDeleteBtn"
          // onClick={removeAllCartItemsHandler}
          onClick={getRemoteCartList}
        >
          전체삭제
        </button>
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