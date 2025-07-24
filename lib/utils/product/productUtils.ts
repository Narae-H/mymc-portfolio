import { SortKeyValues } from "@/data/sortConfig";
import { FilterValues } from "@/models/filter";
import { Product } from "@/models/product";
import { isMetafieldSortKey } from "../typeGuards";
import { clientSortProducts } from "./productSortUtils";
import { clientFiltersProducts } from "./productFilterUtils";

export function applyClientSortAndFilterFromUrlParams ( 
  products: Product[], 
  sortBy: SortKeyValues | undefined, 
  filters: FilterValues | undefined
): Product[] {
  if( !sortBy || !filters ) return products;
  return applyClientSortAndFilter(products, sortBy, filters);
}

export function applyClientSortAndFilterFromState( 
  products: Product[], 
  sortBy: SortKeyValues | undefined, 
  filters: FilterValues | undefined 
): Product[] {
  if( !sortBy || !filters ) return products;
  return applyClientSortAndFilter(products, sortBy, filters);
}

function applyClientSortAndFilter(products: Product[], sortBy: SortKeyValues, filters: FilterValues ):Product[]  {
  let sorted: Product[] = isMetafieldSortKey(sortBy)? clientSortProducts(products, sortBy) : products;
  let filted: Product[] = clientFiltersProducts(sorted, filters);

  return filted;
}