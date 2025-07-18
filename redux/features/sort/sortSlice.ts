import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SortState {
  sortBy: string;
}

const initialState: SortState = {
  sortBy: 'Featured'
}

const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSort(state, action: PayloadAction<string>) {
      state.sortBy = action.payload;
    },
    resetSort(state){
      state.sortBy = initialState.sortBy;
    } 
  }
})

export const { setSort, resetSort } = sortSlice.actions;
export default sortSlice.reducer;