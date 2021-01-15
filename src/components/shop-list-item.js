import React from 'react';

const ShopListItem = ({ fruit }) => {
  const { name, price, url } = fruit

  return (
    <div className="shop-list-item">
      <div className="shop-list-item__header">
        <div className="shop-list-item__image">
          <img src={url} alt="Картинка продукта" className="shop-list-item__url" />
        </div>
        <h3 className="shop-list-item__name">{name}</h3>
      </div>
      <div className="shop-list-item__content">
        <span className="shop-list-item__price">Цена: {price} $</span>
      </div>
      <button className="button">Купить</button>
    </div>
  )
};

export default ShopListItem;
