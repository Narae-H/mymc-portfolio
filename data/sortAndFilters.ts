export const sortAndFilters = [
  {
    title: 'Sort',
    key: 'sort',
    type: 'radio',
    options: [
      { label: 'Top sellers', slug: 'top-sellers' },
      { label: 'New', slug: 'new' },
      { label: 'Price (Low to High)', slug: 'price-low-to-high' },
      { label: 'Price (High to Low)', slug: 'price-high-to-low' },
      { label: 'Calories (Low to High)', slug: 'calories-low-to-high' },
      { label: 'Calories (High to Low)', slug: 'calories-high-to-low' },
      { label: 'Protein (Low to High)', slug: 'protein-low-to-high' },
      { label: 'Protein (High to Low)', slug: 'protein-high-to-low' },
      { label: 'Carbs (Low to High)', slug: 'carbs-low-to-high' },
      { label: 'Carbs (High to Low)', slug: 'carbs-high-to-low' },
      { label: 'Name A-Z', slug: 'name-az' },
    ],
  },
  {
    title: 'Preferences',
    key: 'preferences',
    type: 'checkbox',
    options: [
      { label: 'Keto', slug: 'keto' },
      { label: 'Vegan', slug: 'vegan' },
      { label: 'Dairy-Free', slug: 'dairy-free' },
    ],
  },
  {
    title: 'Protein Type',
    key: 'proteinType',
    type: 'checkbox',
    options: [
      { label: 'Beef', slug: 'beef' },
      { label: 'Chicken', slug: 'chicken' },
      { label: 'Lamb', slug: 'lamb' },
      { label: 'Pork', slug: 'pork' },
      { label: 'Turkey', slug: 'turkey' },
      { label: 'Kangaroo', slug: 'kangaroo' },
      { label: 'Vegetarian', slug: 'vegetarian' },
    ],
  },
  {
    title: 'Carbs',
    key: 'carbs',
    type: 'checkbox',
    options: [
      { label: '<20g', slug: 'lt20g' },
      { label: '20–40g', slug: '20-40g' },
      { label: '>40g', slug: 'gt40g' },
    ],
  },
  {
    title: 'Calories',
    key: 'calories',
    type: 'checkbox',
    options: [
      { label: '<400', slug: 'lt400' },
      { label: '400–500', slug: '400-500' },
      { label: '>500', slug: 'gt500' },
    ],
  },
  {
    title: 'Dietary',
    key: 'dietary',
    type: 'checkbox',
    options: [
      { label: 'Gluten-Free', slug: 'gluten-free' },
      { label: 'No Added Sugar', slug: 'no-added-sugar' },
    ],
  },
] as const;

export const DEFAULT_FILTER_VALUES = {
  sort: 'top-sellers',
  preferences: [],
  proteinType: [],
  carbs: [],
  calories: [],
  dietary: [],
} as const;