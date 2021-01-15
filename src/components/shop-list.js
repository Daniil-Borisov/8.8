import React from 'react';
import ShopListItem from "./shop-list-item";

const ShopList = ({ fruits, addFruitInCart }) => {
  return (
    <section className="shop-list">
      <ul className="shop-list__list">
        {
          // Перебираем массив объектов, передавая каждый в компонент CartListItem.
          // В li передаём key, равный id и говорим, что при клике на элемент вызывается переданная функция, принимая id элемента
          fruits.map((fruit) => {
            const { id } = fruit;

            return (
              <li key={id.toString()}
                  className="shop-list__item"
                  onClick={() => addFruitInCart(id)}
              >
                <ShopListItem fruit={fruit} />
              </li>
            )
          })
        }
      </ul>
    </section>
  )
};

export default ShopList;
