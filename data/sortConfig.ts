export type ShopifySortKey = 'TITLE' | 'PRICE' | 'CREATED_AT' | 'BEST_SELLING';

export const SHOPIFY_SORT_CONFIG = {
  'top-sellers': { sortKey: 'BEST_SELLING', reverse: false },
  'new': { sortKey: 'CREATED_AT', reverse: true },
  'price-low-to-high': { sortKey: 'PRICE', reverse: false },
  'price-high-to-low': { sortKey: 'PRICE', reverse: true },
  'name-az': { sortKey: 'TITLE', reverse: false },
} as const;

export const METAFIELD_SORT_CONFIG = {
  'calories-low-to-high': { key: 'calories', direction: 'asc' },
  'calories-high-to-low': { key: 'calories', direction: 'desc' },
  'protein-low-to-high': { key: 'protein', direction: 'asc' },
  'protein-high-to-low': { key: 'protein', direction: 'desc' },
  'carbs-low-to-high': { key: 'carbs', direction: 'asc' },
  'carbs-high-to-low': { key: 'carbs', direction: 'desc' },
} as const;

export type SortKeyValues =
  | keyof typeof SHOPIFY_SORT_CONFIG
  | keyof typeof METAFIELD_SORT_CONFIG;
