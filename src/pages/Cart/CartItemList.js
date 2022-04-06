import React, { useState, useEffect } from 'react';
import './CartItemList.scss';
const CartItemList = ({
  cartItem,
  cartList,
  onChangeCartList,
  onAddToTotalPrice,
}) => {
  // const { totalPrice ,productId, productName, size, quantity, price } = cartItem;
  // console.log(totalPrice ,productId, productName, size, quantity, price);
  console.log(cartList);
  console.log(`${cartItem.productId} quantity: ${cartItem.quantity}`);
  ///////////////////////////////////////////////////////
  // 수량 하나 추가 버튼기능

  ///////////////////////////////////////////////////////
  // 수량 하나 제거 버튼기능

  /////////////////////////////////////////////////////////

  useEffect(() => {
    onAddToTotalPrice(cartItem.totalPrice);
  }, []);

  //////////////////////////////////////////////////////

  const deleteItemInList = () => {
    const newList = cartList.filter(item => {
      return item.productId !== cartItem.productId;
    });
    onChangeCartList(newList);
  };

  /////////////////////////////////////////////////////
  return (
    <li className="cartProductListItems">
      <div className="carProductItemInner">
        <div className="productName">
          {/* <a href="TODO:상품주소 템플릿 리터럴로 만들어서 넣어야됨">{productName}</a> */}
          <a href="http://naver.com">{cartItem.productName}</a>
        </div>
        <div className="productVolume">
          <span>{cartItem.size}</span>
        </div>

        <div className="productQuantity">
          <button className="productQuantityBtn oneMinusBtn">
            <i className="fa-solid fa-minus" />
          </button>

          <input
            className="productQuantityInputBox"
            type="number"
            value={cartItem.quantity}
            readOnly={true}
          />

          <button className="productQuantityBtn onePlustBtn">
            <i className="fa-solid fa-plus" />
          </button>

          <button
            className="productListDeleteBtn"
            type="button"
            onClick={deleteItemInList}
          >
            삭제
          </button>
        </div>

        <div className="productTotalPrice">
          <span>{`₩${cartItem.totalPrice}`}</span>
        </div>
      </div>
    </li>
  );
};

export default CartItemList;
