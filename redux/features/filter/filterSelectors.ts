import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';

const selectFilter = (state: RootState) => state.filter;

export const selectSelectedFilters = createSelector(
  [selectFilter],
  (filter) => filter.selectedFilters
);
