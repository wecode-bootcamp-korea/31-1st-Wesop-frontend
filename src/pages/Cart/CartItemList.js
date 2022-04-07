import React, { useEffect } from 'react';
import './CartItemList.scss';
import { CART_SERVER_ADDRESS } from '../../config/config';
import { DETAIL_SERVER_ADDRESS } from '../../config/config';

const CartItemList = ({
  cartItem,
  deletedCartItemToServer,
  onAddToTotalPrice,
  getRemoteCartList,
}) => {
  const { cartMainAddress } = CART_SERVER_ADDRESS;
  const { mainDescription } = DETAIL_SERVER_ADDRESS;

  // const { productId, cartId ,productName, productSize, quantity, totalPrice } = cartItem

  ///////////////////////////////////////////////////////
  // 수량 조절 기능
  const editItemQuantityInCart = modifiedQuantity => {
    const cartIdInFunc = cartItem.cartId;

    fetch(cartMainAddress, {
      method: 'PATCH',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        cart_id: cartIdInFunc,
        quantity: modifiedQuantity,
      }),
    }).then(getRemoteCartList());
  };

  const plusOneItemQuantity = () => {
    editItemQuantityInCart(cartItem.quantity + 1);
  };

  const minusOneItemQuantity = () => {
    editItemQuantityInCart(cartItem.quantity - 1);
  };

  useEffect(() => {
    onAddToTotalPrice(cartItem.totalPrice);
  }, []);
  // TODO: 체크
  // }, [cartItem]);

  const deleteItemInList = () => {
    deletedCartItemToServer(cartItem.cartId);
  };

  return (
    <li className="cartProductListItems">
      <div className="carProductItemInner">
        <div className="productName">
          <a href={`${mainDescription}${cartItem.productId}`}>
            {cartItem.productName}
          </a>
        </div>
        <div className="productVolume">
          <span>{cartItem.productSize}</span>
        </div>

        <div className="productQuantity">
          <button
            className="productQuantityBtn oneMinusBtn"
            onClick={minusOneItemQuantity}
          >
            <i className="fa-solid fa-minus" />
          </button>

          <input
            className="productQuantityInputBox"
            type="number"
            value={cartItem.quantity}
            readOnly={true}
          />

          <button
            className="productQuantityBtn onePlustBtn"
            onClick={plusOneItemQuantity}
          >
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
