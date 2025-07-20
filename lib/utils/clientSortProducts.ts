import { METAFIELD_SORT_CONFIG } from "@/data/sortConfig";
import { Product } from "@/models/product";

export function clientSortProducts (
  products: Product[], 
  sortBy: string
 ): Product[] {
  if( sortBy && sortBy in METAFIELD_SORT_CONFIG ) {
    return metafieldSort(products, sortBy as keyof typeof METAFIELD_SORT_CONFIG);
  } else {
    return products;
  }
}

function metafieldSort(
  products: Product[], 
  sortBy: keyof typeof METAFIELD_SORT_CONFIG,
): Product[] {
  const { key, direction } = METAFIELD_SORT_CONFIG[sortBy];
  return [...products].sort((a, b) => {
    const aValue = a[key] as number;
    const bValue = b[key] as number;
    return direction === 'asc' ? aValue - bValue : bValue - aValue;
  });
}








