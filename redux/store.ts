import { configureStore } from '@reduxjs/toolkit';
import filterReducer from '@/redux/features/filterSlice'; 
import sortReducer from '@/redux/features/sortSlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    sort: sortReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;