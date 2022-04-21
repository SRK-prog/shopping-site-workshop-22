import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import Notification from "./components/Notification";
import { fetchData, sendToCart } from "./store/cartActions";

let isFirstRender = true;
function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cartItems = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.notify.notification);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }
    if (cartItems.changed) {
      dispatch(sendToCart(cartItems));
    }
  }, [dispatch, cartItems]);
  return (
    <div className="App">
      {notification && (
        <Notification
          type={notification?.type}
          message={notification?.message}
        />
      )}
      {isLoggedIn ? <Layout /> : <Auth />}
    </div>
  );
}

export default App;
