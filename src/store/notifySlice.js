import { createSlice } from "@reduxjs/toolkit";

const notifySlice = createSlice({
  name: "notify",
  initialState: { notification: null },
  reducers: {
    showNotification(state, action) {
      state.notification = {
        type: action.payload.type,
        message: action.payload.message,
        open: action.payload.open,
      };
    },
  },
});

export const notifyAction = notifySlice.actions;

export default notifySlice;
