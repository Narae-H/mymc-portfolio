import { COLLECTION_SORT_CONFIG, METAFIELD_SORT_CONFIG, PRODUCT_SORT_CONFIG, SortKeyValues } from "@/data/sortConfig";

export function isShopifyProductSortKey(key: string): key is keyof typeof PRODUCT_SORT_CONFIG {
  return typeof key === "string" && key in PRODUCT_SORT_CONFIG;
}

export function isShopifyCollectionSortKey(key: string): key is keyof typeof COLLECTION_SORT_CONFIG {
  return typeof key === "string" && key in COLLECTION_SORT_CONFIG;
}

export function isMetafieldSortKey(key: string): key is keyof typeof METAFIELD_SORT_CONFIG {
  return typeof key === "string" && key in METAFIELD_SORT_CONFIG;
}

export function isValidSortKey(key: string): key is SortKeyValues {
  return key in PRODUCT_SORT_CONFIG || key in COLLECTION_SORT_CONFIG || key in METAFIELD_SORT_CONFIG;
}