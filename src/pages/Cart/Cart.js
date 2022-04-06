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
  //     method: 'POST',
  //     headers: {
  //       Authorization: localStorage.getItem('token'),
  //     },
  //     body: {
  //       // TODO:cart 보내야되는데 어떻게 보내야 할지 상의
  //     },
  //   }).then(res => res.json());
  // };

  const getRemoteCartList = () => {
    // fetch(cartMainAddress, {
    fetch('http://localhost:3000/data/cart_list.json', {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(dataList => {
        onChangeCartList(dataList);
      });
  };

  useEffect(() => {
    getRemoteCartList();
  }, []);

  // index도 내려서 받는다
  // index이용해서 접근하고 수정한다
  // 수정한 state를 바탕으로 백앤드 서버에 보낸다.
  // 배열 전체를 새로 보내야할지 수정사항만 보내야할지에 대해 고민해봐야

  const removeCartListItemHandler = () => {};

  ////////////////////////////////////////////////////////////////////
  const addPriceToCartListTotalPriceHandler = price => {
    setCartListTotalPrice(
      prevcartListTotalPrice => (prevcartListTotalPrice += price)
    );
  };

  const removeAllCartItemsHandler = () => {
    setCartListTotalPrice(0);
    onChangeCartList([]);
    // TODO: 전체삭제시 백앤드에 post하는 시점 고려해봐야
  };
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
          {cartList.map((cartItem, index) => (
            <CartItemList
              key={cartItem.productId}
              cartList={cartList}
              onChangeCartList={onChangeCartList}
              cartItem={cartItem}
              itemIndex={index}
              onAddToTotalPrice={addPriceToCartListTotalPriceHandler}
            />
          ))}
        </ul>
      </div>
      <div className="cartAllDelete">
        <button
          className="cartAllDeleteBtn"
          onClick={(removeAllCartItemsHandler, onCloseCartModal)}
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
