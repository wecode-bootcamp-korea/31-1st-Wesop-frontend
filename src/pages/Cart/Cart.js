import React, { useState, useEffect } from 'react';
import CartItemList from './CartItemList';
import { CART_SERVER_ADDRESS } from '../../config/config';
import './Cart.scss';

const Cart = ({ cartList, onChangeCartList }) => {
  ////////////////////////////////////////////////////////////////////

  // const [cartListTotalPrice, setCartListTotalPrice] = useState(0);
  // const { cartMainAddress } = CART_SERVER_ADDRESS;
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
      .then(res => console.log(res))
      .then(datalist => onChangeCartList(datalist));
  };

  // useEffect(() => {
  //   getRemoteCartList();
  // }, []);

  // const addCartListItemHandler = item => {
  //   let newCartList = [...cartList];
  //   const { productId } = item;
  //   const existingItem = newCartList.find(
  //     cartItem => cartItem.productId === productId
  //   );

  //   if (existingItem) {
  //     existingItem.quantity += item.quantity;
  //   } else {
  //     newCartList.push(item);
  //   }
  //   setCartList(newCartList);
  // };

  // const editCartListItemHandler = (item, number) => {
  //   console.log(item);
  //   let newCartList = [...cartList];
  //   console.log(newCartList);
  //   const { prodcutId } = item;
  //   const existentItem = newCartList.find(
  //     cartItem => cartItem.productId === prodcutId
  //   );
  //   console.log(existentItem);

  //   if (!existentItem) return;
  //   console.log(existentItem);
  //   existentItem.quantity += number;

  //   if (existentItem.quantity <= 0) {
  //     newCartList = newCartList.filter(cartItem => cartItem.Id !== prodcutId);
  //   }
  //   setCartList(newCartList);
  // };

  // const removeCartListItemHandler = item => {
  //   let newCartList = [...cartList];
  //   const { productId } = item;
  //   newCartList = newCartList.filter(
  //     cartItem => cartItem.productId !== productId
  //   );
  //   setCartList(newCartList);
  // };

  // const removeAllCartItemsHandler = () => {
  //   setCartListTotalPrice(0);
  //   setCartList([]);
  // };

  // const addPriceToCartListTotalPriceHandler = price => {
  //   setCartListTotalPrice(
  //     prevcartListTotalPrice => (prevcartListTotalPrice += price)
  //   );
  // };

  ////////////////////////////////////////////////////////////////////

  return (
    <div className="cart">
      <div className="cartProducts">
        <div className="cartHeader">
          <div className="cartHeaderTitleLabel">카트</div>
          <div className="cartHeaderSizeLabel">사이즈</div>
          <div className="cartHeaderProductLabel">수량</div>
          <button className="cartHeaderCloseBtn" type="button">
            {/* <i className="fa-solid fa-xmark" /> */}x
          </button>
        </div>
        <ul className="cartProductList">
          {cartList.map(cartItem => (
            <CartItemList
              key={cartItem.productId}
              cartItem={cartItem}
              // cartListTotalPrice={cartListTotalPrice}
              // onEditCartItem={editCartListItemHandler}
              // onRemoveCartItem={removeCartListItemHandler}
              // onAddToTotalPrice={addPriceToCartListTotalPriceHandler}
            />
          ))}
        </ul>
      </div>
      <div className="cartAllDelete">
        <button
          className="cartAllDeleteBtn"
          // onClick={removeAllCartItemsHandler}
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
          {/* <span className="cartSummaryPriceTotal">{`₩ ${cartListTotalPrice}`}</span> */}
          <span className="cartSummaryPriceTotal">{`₩ `}</span>
        </div>
        <div className="cartSummarySubmitBtn">
          <button type="button">결제하기</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
