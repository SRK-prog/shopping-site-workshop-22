import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cartSlice";
import "./assets/stylesheet/Cart.css";
const Cart = () => {
  const quantity = useSelector((state) => state.cart?.totalQuantity);
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(cartActions.setShowCart())}
      className="cartIcon"
    >
      <h3>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
