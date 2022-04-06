import React, { useEffect } from 'react';
import './CartItemList.scss';
const CartItemList = ({
  cartItem,
  cartList,
  onChangeCartList,
  onEditCartItem,
  itemIndex,
  onAddToTotalPrice,
}) => {
  const test1 = () => {
    console.log('minus');
  };
  const test2 = () => {
    console.log('plus');
  };
  const test3 = () => {
    console.log('delete');
  };

  // const { productId, productName, size, quantity, price } = cartItem;
  // console.log(productId, productName, size, quantity, price);
  // console.log(`itemIndex: ${itemIndex}`);

  /////////////////////////////////////////////////////////

  let itemTotalPrice = cartItem.quantity * cartItem.price;

  useEffect(() => {
    onAddToTotalPrice(itemTotalPrice);
  }, [cartItem.quantity]);

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
          {/* TODO:데이터 넣고 아래걸로 */}
          {/* <input className="productQuantityInputBox" type="text" value={quantity} onChange={해당 event.target.value quantity로 바꾸는 거}/> */}

          <button className="productQuantityBtn onePlustBtn" onClick={test2}>
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
          <span>{`₩${itemTotalPrice}`}</span>
        </div>
      </div>
    </li>
  );
};

export default CartItemList;
