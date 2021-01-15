import React from "react";
import CartListItem from "./cart-list-item";

const CartList = ({
  cartList,
  addFruitInCart,
  removeFruitFromCart,
  deletePurchasedFruit
}) => {
  return (
    <ul className="cart-list">
      {cartList.map((cart) => {
        const { id } = cart;

        return (
          <li key={id}>
            <CartListItem
              cart={cart}
              addFruitInCart={addFruitInCart}
              removeFruitFromCart={removeFruitFromCart}
              deletePurchasedFruit={deletePurchasedFruit}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default CartList;
