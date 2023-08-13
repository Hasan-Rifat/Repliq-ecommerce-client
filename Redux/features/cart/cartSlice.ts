// cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: string; // Change the type of id to string
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const cartSlice = createSlice({
  name: "cart",
  initialState: [] as CartItem[],
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const { id, name, price, image, quantity } = action.payload;
      const existingItem = state.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.push({ id, name, price, image, quantity });
      }
    },

    removeItem: (state, action: PayloadAction<string>) => {
      // Change the payload type to string
      const itemId = action.payload;
      return state.filter((item) => item.id !== itemId);
    },
    clearCart: () => {
      return [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
