import { METAFIELD_SORT_CONFIG, SHOPIFY_SORT_CONFIG, SortKeyValues } from "@/data/sortConfig";

export function isShopifySortKey(key: string): key is keyof typeof SHOPIFY_SORT_CONFIG {
  return typeof key === "string" && key in SHOPIFY_SORT_CONFIG;
}

export function isMetafieldSortKey(key: string): key is keyof typeof METAFIELD_SORT_CONFIG {
  return typeof key === "string" && key in METAFIELD_SORT_CONFIG;
}

export function isValidSortKey(key: string): key is SortKeyValues {
  return key in SHOPIFY_SORT_CONFIG || key in METAFIELD_SORT_CONFIG;
}