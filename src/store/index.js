import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import cartSlice from "./cartSlice";
import notifySlice from "./notifySlice";
import authSlice from "./authSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
    notify: notifySlice.reducer,
  },
  middleware: [logger, thunk],
});

export default store;
