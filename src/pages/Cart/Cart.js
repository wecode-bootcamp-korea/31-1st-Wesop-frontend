import React, { useState, useEffect } from 'react';
import CartItemList from './CartItemList';
import { CART_SERVER_ADDRESS } from '../../config/config';
import './Cart.scss';

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const [listTotalPrice, setListTotalPrice] = useState(0);
  const { cartMainAddress } = CART_SERVER_ADDRESS;
  const postLocalCartList = () => {
    fetch(cartMainAddress, {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
      body: {
        // TODO:cart 보내야되는데 어떻게 보내야 할지 상의
      },
    }).then(res => res.json());
  };

  const getRemoteCartList = () => {
    // fetch(cartMainAddress, {
    fetch('http://localhost:3000/data/cart_list.json', {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(datalist => setCartList(datalist));
    // TODO:로컬에 있는 장바구니랑 받아온 장바구니랑 합쳐서 새로운 cart 만들고 local에 적용하고 다음에 다시 서버로 보내야됨
  };

  // TODO: 페이지 새로 열릴때 "컬에 있는 장바구니랑 받아온 장바구니랑 합쳐서 새로운 cart 만들고 local에 적용하고 다음에 다시 서버로 보내야됨"
  // TODO: 그러면 이 과정에 관해서 따로 펑션 만들고 작동시키면 될 듯.
  useEffect(() => {
    getRemoteCartList();
  }, []);

  ///////////////////////////////

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
  //   const stringCartList = JSON.stringify(newCartList);
  //   localStorage.setItem('cart', stringCartList);
  // };
  ///////////////////////////////////////////////////////////
  const editCartListItemHandler = (item, number) => {
    console.log(item);
    let newCartList = [...cartList];
    console.log(newCartList);
    const { prodcutId } = item;
    const existentItem = newCartList.find(
      cartItem => cartItem.productId === prodcutId
    );
    console.log(existentItem);

    if (!existentItem) return;
    console.log(existentItem);
    existentItem.quantity += number;

    if (existentItem.quantity <= 0) {
      newCartList = newCartList.filter(cartItem => cartItem.Id !== prodcutId);
    }
    setCartList(newCartList);
    const cartString = JSON.stringify(newCartList);
    localStorage.setItem('cart', cartString);
  };
  ///////////////////////////////////////////////////////////////////////////
  const removeCartListItemHandler = item => {
    let newCartList = [...cartList];
    const { productId } = item;
    newCartList = newCartList.filter(
      cartItem => cartItem.productId !== productId
    );
    setCartList(newCartList);
    const cartStringList = JSON.stringify(newCartList);
    localStorage.setItem('cart', cartStringList);
  };
  /////////////////////////////////////////////////////////////////////////////////
  const removeAllCartItemsHandler = () => {
    setListTotalPrice(0);
    setCartList([]);
    localStorage.removeItem('cart');
  };

  const addPriceToListTotalPriceHandler = price => {
    setListTotalPrice(prevListTotalPrice => (prevListTotalPrice += price));
  };

  return (
    <div className="cart">
      <div className="cartProducts">
        <div className="cartHeader">
          <div className="cartHeaderTitleLabel">카트</div>
          <div className="cartHeaderSizeLabel">사이즈</div>
          <div className="cartHeaderProductLabel">수량</div>
          <button className="cartHeaderCloseBtn" type="button">
            <i className="fa-solid fa-xmark" />
          </button>
        </div>
        <ul className="cartProductList">
          {cartList.map(cartItem => (
            <CartItemList
              key={cartItem.productId}
              cartItem={cartItem}
              listTotalPrice={listTotalPrice}
              onEditCartItem={editCartListItemHandler}
              onRemoveCartItem={removeCartListItemHandler}
              onAddToTotalPrice={addPriceToListTotalPriceHandler}
            />
          ))}
        </ul>
      </div>
      <div className="cartAllDelete">
        <button
          className="cartAllDeleteBtn"
          onClick={removeAllCartItemsHandler}
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
          <span className="cartSummaryPriceTotal">{`₩ ${listTotalPrice}`}</span>
        </div>
        <div className="cartSummarySubmitBtn">
          <button type="button">결제하기</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
