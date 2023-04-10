import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      console.log("state.items:", state.items);
    },
    clearCart: (state) => {
      state.items = [];
    },
    removeItem: (state, action) => {
      const itemToRemove = action.payload;
      state.items = state.items.filter((item) => item.id !== itemToRemove.id);
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
