import React, { useEffect } from 'react';
import './CartItemList.scss';
import { CART_SERVER_ADDRESS } from '../../config/config';
import { DETAIL_SERVER_ADDRESS } from '../../config/config';

const CartItemList = ({
  cartList,
  cartItem,
  deletedCartItemToServer,
  onAddToTotalPrice,
  getRemoteCartList,
}) => {
  const { cartMainAddress } = CART_SERVER_ADDRESS;
  const { mainDescription } = DETAIL_SERVER_ADDRESS;

  const { productId, cartId, productName, productSize, quantity, totalPrice } =
    cartItem;

  const editItemQuantityInCart = modifiedQuantity => {
    const cartIdInFunc = cartId;
    fetch(`${cartMainAddress}/cart/${cartIdInFunc}`, {
      method: 'PATCH',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        quantity: modifiedQuantity,
      }),
    }).then(setTimeout(() => getRemoteCartList(), 300));
  };

  const plusOneItemQuantity = () => {
    editItemQuantityInCart(quantity + 1);
  };

  const minusOneItemQuantity = () => {
    editItemQuantityInCart(quantity - 1);
  };

  useEffect(() => {
    onAddToTotalPrice(totalPrice);
    console.log('test');
  }, [cartList]);

  const deleteItemInList = () => {
    deletedCartItemToServer(cartId);
  };

  return (
    <li className="cartProductListItems">
      <div className="carProductItemInner">
        <div className="productName">
          <a href={`${mainDescription}${productId}`}>{productName}</a>
        </div>
        <div className="productVolume">
          <span>{productSize}</span>
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
            value={quantity}
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
          <span>{`₩${totalPrice}`}</span>
        </div>
      </div>
    </li>
  );
};

export default CartItemList;
