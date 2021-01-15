import React, { Component } from "react";

import { fruits } from "../fruits";
import CartList from "./cart-list";
import ShopList from "./shop-list";
import Navigation from "./navigation";

import { Route } from "react-router-dom";


const updateCartList = (cartList, newFruit, index) => {

  if (newFruit.count === 0) {
    return [...cartList.slice(0, index), ...cartList.slice(index + 1)];
  }


  if (index === -1) {
    return [...cartList, newFruit];
  }


  return [...cartList.slice(0, index), newFruit, ...cartList.slice(index + 1)];
};


const updateFruit = (getFruit, fruitInCart, quantity) => {

  let price = getFruit.price;
  if (fruitInCart) {


    if((fruitInCart.count + quantity) % 3 === 0) {
      price = quantity * getFruit.price / 2;
    } else {
      price = quantity * getFruit.price;
    }

    return {
      ...fruitInCart,
      totalPrice: fruitInCart.totalPrice + price,
      count: fruitInCart.count + quantity,
    };

  }


  return {
    id: getFruit.id,
    name: getFruit.name,
    url: getFruit.url,
    totalPrice: getFruit.price,
    count: 1
  };
};

const removeFruit=(getFruit, fruitInCart, quantity) => {
  let price = getFruit.price;
  if (fruitInCart) {


    if ((fruitInCart.count) % 3 === 0) {
      price = quantity * getFruit.price / 2;
    } else {
      price = quantity * getFruit.price;
    }

    return {
      ...fruitInCart,
      totalPrice: fruitInCart.totalPrice + price,
      count: fruitInCart.count + quantity,
    };
  }
}

class App extends Component {
  state = {
    cartList: []
  };


  addFruitInCart = (id) => {
    const { cartList } = this.state;

    this.setState(() => {
      const getFruit = fruits.find((fruit) => fruit.id === id);
      const getFruitIndex = cartList.findIndex((fruit) => fruit.id === id);
      const fruitInCart = cartList[getFruitIndex];

      const newFruit = updateFruit(getFruit, fruitInCart, 1);
      const newArray = updateCartList(cartList, newFruit, getFruitIndex);

      return {
        cartList: newArray
      };
    });
  };

  removeFruitFromCart = (id) => {
    const { cartList } = this.state;

    this.setState(() => {
      const getFruit = fruits.find((fruit) => fruit.id === id);
      const getFruitIndex = cartList.findIndex((fruit) => fruit.id === id);
      const fruitInCart = cartList[getFruitIndex];

      const newFruit = removeFruit(getFruit, fruitInCart, -1);
      const newArray = updateCartList(cartList, newFruit, getFruitIndex);

      return {
        cartList: newArray
      };
    });
  };

  deletePurchasedFruit = (id) => {
    const { cartList } = this.state;

    this.setState(() => {
      const getFruit = fruits.find((fruit) => fruit.id === id);
      const getFruitIndex = cartList.findIndex((fruit) => fruit.id === id);
      const fruitInCart = cartList[getFruitIndex];

      const newFruit = updateFruit(getFruit, fruitInCart, -fruitInCart.count);
      const newArray = updateCartList(cartList, newFruit, getFruitIndex);

      return {
        cartList: newArray
      };
    });
  };

  render() {
    return (
      <main className="app">
        <Navigation />
        <Route
          path="/"
          exact
          render={() => {
            return (
              <ShopList fruits={fruits} addFruitInCart={this.addFruitInCart} />
            );
          }}
        />
        <Route
          path="/cart-list"
          exact
          render={() => {
            return (
              <CartList
                cartList={this.state.cartList}
                addFruitInCart={this.addFruitInCart}
                removeFruitFromCart={this.removeFruitFromCart}
                deletePurchasedFruit={this.deletePurchasedFruit}
              />
            );
          }}
        />
      </main>
    );
  }
}

export default App;
