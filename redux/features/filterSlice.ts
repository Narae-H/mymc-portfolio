import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterValues {
  preferences: string[];
  proteinType: string[];
  carbs: string[];
  calories: string[];
  dietary: string[];
}

interface FilterState {
  selectedFilterCount : number;
  selectedFilters: FilterValues;
}

const initialState: FilterState = {
  selectedFilterCount: 0,
  selectedFilters: {
    preferences: [],
    proteinType: [],
    carbs: [],
    calories: [],
    dietary: []
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {  
    toggleFilter(state, action: PayloadAction<{ key: keyof FilterValues; value: string }>) {
      const { key, value } = action.payload;
      const currentList = state.selectedFilters[key];

      if (currentList.includes(value)) {
        state.selectedFilters[key] = currentList.filter((v) => v !== value);
      } else {
        state.selectedFilters[key].push(value);
      }

      state.selectedFilterCount = Object.values(state.selectedFilters).reduce(
        (acc, arr) => acc + arr.length,
        0
      );
    },

    clearFilters(state) {
      for (const key in state.selectedFilters) {
        state.selectedFilters[key as keyof FilterValues] = [];
      }
      state.selectedFilterCount = 0;
    },
  },
});

export const { toggleFilter, clearFilters } = filterSlice.actions;
export default filterSlice.reducer;