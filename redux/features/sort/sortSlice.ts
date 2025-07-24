import { DEFAULT_FILTER_VALUES } from "@/data/sortAndFilters";
import { SortKeyValues } from "@/data/sortConfig";
import { isValidSortKey } from "@/lib/utils/typeGuards";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SortState {
  sortBy: SortKeyValues;
}

const initialState: SortState = {
  sortBy: DEFAULT_FILTER_VALUES.sort
}

const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSort(state, action: PayloadAction<string | undefined>) {
      if (action.payload && (isValidSortKey(action.payload)) ) {
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