import { fetchProducts } from '@/api/products';
import SharedPage from '@/app/components/SharedPage/SharedPage';
import { SortKeyValues } from '@/data/sortConfig';
import { applyClientSortAndFilterFromUrlParams } from '@/lib/utils/product/productUtils';
import { parseFiltersFromParams, parseSortByFromParams } from '@/lib/utils/urlHelpers';
import { FilterValues } from '@/models/filter';

type Props = {
  searchParams: Promise<Record<string, string>>;
}

export default async function Home( {searchParams} : Props ) {
  const parsedParams: Record<string, string> = await searchParams;
  const sortBy: SortKeyValues = parseSortByFromParams(parsedParams);
  const filters: FilterValues = parseFiltersFromParams(parsedParams);

  console.log("---Home----");
  console.log(sortBy); 
  console.log(filters); 
  console.log("---Home----");

  const { products } = await fetchProducts({ sortBy, filters });
  const sortedFilteredProducts = applyClientSortAndFilterFromUrlParams(products, sortBy, filters);

  return (
    <SharedPage 
      initialProducts = {sortedFilteredProducts} 
      initialSort = {sortBy} 
      initialFilters={filters}
    />
  );
}

