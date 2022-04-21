import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";
import "./assets/stylesheet/Cart.css";

const CartItem = ({ name, quantity, total, price, id }) => {
  const dispatch = useDispatch();
  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>${price} /-</p>
      <p>x{quantity}</p>
      <article>Total ${total}</article>
      <button
        onClick={() => dispatch(cartActions.removeFromCart(id))}
        className="cart-actions"
      >
        -
      </button>
      <button
        onClick={() => dispatch(cartActions.addToCart({ name, price, id }))}
        className="cart-actions"
      >
        +
      </button>
    </div>
  );
};

export default CartItem;
