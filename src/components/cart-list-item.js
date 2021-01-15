import React from 'react';

const CartListItem = ({ cart, addFruitInCart, removeFruitFromCart, deletePurchasedFruit }) => {
  const { name, url, count, totalPrice, id } = cart;

  return (
    <div className="cart-list-item">
      <div className="cart-list-item__header">
        <div className="cart-list-item__image">
          <img src={url} alt="Телефон" />
        </div>
        <h4 className='cart-list-item__name'>{name}</h4>
      </div>
      <div>
        <button className="button-cart" onClick={() => removeFruitFromCart (id)}>-</button>
        <span className="cart-list-item__count">{count}</span>
        <button className="button-cart" onClick={() => addFruitInCart(id)}>+</button>
      </div>
      <span className="cart-list-item__total-price">{totalPrice} $</span>
      <button className="cart-list-item__delete" onClick={() => deletePurchasedFruit(id)}>Удалить</button>
    </div>
  )
};

export default CartListItem;
