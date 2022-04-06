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

// const changeItemPrice = () => {
//   let oldPrice = itemPrice;
//   setItemPrice(cartItem.quantity * cartItem.price);
//   onAddToTotalPrice(itemPrice - oldPrice);
// };

////////////////////////////////////////////////////////////////////

// 추가완
//
// const removeAllCartItemsHandler = () => {
//   setCartListTotalPrice(0);
//   setCartList([]);
// };
//
// 추가완
// const addPriceToCartListTotalPriceHandler = price => {
//   setCartListTotalPrice(
//     prevcartListTotalPrice => (prevcartListTotalPrice += price)
//   );
// };
