export interface FilterValues {
  preferences: string[];
  proteinType: string[];
  carbs: string[];
  calories: string[];
  dietary: string[];
};

export const emptyFilterValues: FilterValues = {
  preferences: [],
  proteinType: [],
  carbs: [],
  calories: [],
  dietary: [],
};

export interface FilterState {
  selectedFilterCount : number;
  selectedFilters: FilterValues;
};

export const emptyFilterState: FilterState = {
  selectedFilterCount: 0,
  selectedFilters: emptyFilterValues,
};