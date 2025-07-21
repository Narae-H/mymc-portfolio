import { DEFAULT_FILTER_VALUES } from "@/data/sortAndFilters";
import { ValidSortKey } from "@/data/sortConfig";
import { isMetafieldSortKey, isShopifySortKey } from "@/lib/utils/typeGuards";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SortState {
  sortBy: ValidSortKey;
}

const initialState: SortState = {
  sortBy: DEFAULT_FILTER_VALUES.sort
}

const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSort(state, action: PayloadAction<string>) {
      if (isShopifySortKey(action.payload) || isMetafieldSortKey(action.payload)) {
        state.sortBy = action.payload;
      }
    },
    resetSort(state){
      state.sortBy = initialState.sortBy;
    } 
  }
})

export const { setSort, resetSort } = sortSlice.actions;
export default sortSlice.reducer;