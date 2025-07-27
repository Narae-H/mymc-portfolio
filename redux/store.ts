import { configureStore } from '@reduxjs/toolkit';
import filterReducer from '@/redux/features/filter/filterSlice'; 
import sortReducer from '@/redux/features/sort/sortSlice';
import cartReducer from '@/redux/features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    sort: sortReducer,
    cart: cartReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;