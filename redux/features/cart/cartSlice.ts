import { calculateTotalPrice, getCurrentDiscountRate } from "@/lib/utils/cart/discount";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  items: {
    [productId: string]: {
      count: number;
      price: number;
    };
  },
  totalCount: number,
  currentDiscountRate: number,
  totalPrice: number,
}

interface AddItemPayload {
  id: string;
  price: number;
}

const initialState: CartState = {
  items: {},
  totalCount: 0,
  currentDiscountRate: 0,
  totalPrice: 0.00
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<AddItemPayload>) {
      const { id, price } = action.payload;

      // items
      if (!state.items[id]) {
        state.items[id] = { count: 1, price };
      } else {
        state.items[id].count += 1;
      }

      // totalCount
      state.totalCount += 1;

      // currentDiscountRate
      state.currentDiscountRate = getCurrentDiscountRate(state.totalCount)

      // totalPrice
      state.totalPrice = calculateTotalPrice(state.items, state.currentDiscountRate);
    },
    removeItem(state, action: PayloadAction<AddItemPayload>) {
      const { id } = action.payload;
      const item = state.items[id];

      // items
      if (item) {
        item.count -= 1;
        if (item.count <= 0) {
          delete state.items[id];
        }

        // totalCount
        state.totalCount -= 1;

        // currentDiscountRate
        state.currentDiscountRate = getCurrentDiscountRate(state.totalCount)

        // totalPrice
        state.totalPrice = calculateTotalPrice(state.items, state.currentDiscountRate);
      }
    },
    resetCart(state) {
      state.items = {};
      state.totalCount = 0;
      state.totalPrice = 0;
    }
  }
});

export const { addItem, removeItem, resetCart } = cartSlice.actions;
export default cartSlice.reducer;