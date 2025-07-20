export type ValidSortKey = keyof typeof SHOPIFY_SORT_CONFIG | keyof typeof METAFIELD_SORT_CONFIG;

export type ShopifySortKey = 'TITLE' | 'PRICE' | 'CREATED_AT' | 'BEST_SELLING';
export const SHOPIFY_SORT_CONFIG = {
  'Top sellers': { sortKey: 'BEST_SELLING', reverse: false },
  'New': { sortKey: 'CREATED_AT', reverse: true },
  'Price (Low to High)': { sortKey: 'PRICE', reverse: false },
  'Price (High to Low)': { sortKey: 'PRICE', reverse: true },
  'Name A-Z': { sortKey: 'TITLE', reverse: false },
} as const;

export type MetafieldSortDirection = 'asc' | 'desc';
export const METAFIELD_SORT_CONFIG = {
  'Calories (Low to High)': {
    key: 'calories', direction: 'asc'
  }, 
  'Calories (High to Low)': {
    key: 'calories', direction: 'desc'
  }, 
  'Protein (Low to High)': {
    key: 'protein', direction: 'asc'
  }, 
  'Protein (High to Low)': {
    key: 'protein', direction: 'desc'
  }, 
  'Carbs (Low to High)': {
    key: 'carbs', direction: 'asc'
  }, 
  'Carbs (High to Low)': {
    key: 'carbs', direction: 'desc'
  }
} as const;
