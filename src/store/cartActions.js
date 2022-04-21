import axios from "axios";
import { cartActions } from "./cartSlice";
import { notifyAction } from "./notifySlice";

export const sendToCart = (cart) => {
  return async (dispatch) => {
    dispatch(
      notifyAction.showNotification({
        open: true,
        message: "Send request",
        type: "warning",
      })
    );
    try {
      const sendRequest = async () => {
        await axios.put(
          "https://dummy-backend-shopping-site-default-rtdb.firebaseio.com/cartItems.json",
          cart
        );
        dispatch(
          notifyAction.showNotification({
            open: true,
            message: "Request sent succefully",
            type: "success",
          })
        );
      };
      sendRequest();
    } catch (err) {
      dispatch(
        notifyAction.showNotification({
          open: true,
          message: "Request failed",
          type: "error",
        })
      );
    }
  };
};

export const fetchData = () => {
  return async (dispatch) => {
    try {
      const getRequest = async () => {
        const response = await axios.get(
          "https://dummy-backend-shopping-site-default-rtdb.firebaseio.com/cartItems.json"
        );
        dispatch(cartActions.replaceData(response.data));
      };
      getRequest();
    } catch (err) {
      dispatch(
        notifyAction.showNotification({
          open: true,
          message: "Fetch Request failed",
          type: "error",
        })
      );
    }
  };
};
