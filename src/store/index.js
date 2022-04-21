import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import cartSlice from "./cartSlice";
import logger from "redux-logger";
import notifySlice from "./notifySlice";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
    notify: notifySlice.reducer,
  },
  middleware: [logger, thunk],
});

export default store;
