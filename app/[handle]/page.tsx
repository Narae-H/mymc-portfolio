import { fetchProducts } from '@/api/products';
import SharedPage from '@/app/components/SharedPage/SharedPage';
import { SortKeyValues } from '@/data/sortConfig';
import { applyClientSortAndFilterFromUrlParams } from '@/lib/utils/product/productUtils';
import { parseFiltersFromParams, parseSortByFromParams } from '@/lib/utils/urlHelpers';
import { FilterValues } from '@/models/filter';

type Props = { 
  params: Promise<{ handle: string }>;
  searchParams: Promise<Record<string, string>>;
};

export default async function CollectionPage({ params, searchParams }: Props) {
  const { handle } = await params;
  const parsedParams: Record<string, string> = await searchParams;

  const sortBy: SortKeyValues = parseSortByFromParams(parsedParams);
  const filters: FilterValues = parseFiltersFromParams(parsedParams);

  const { products } = await fetchProducts({ handle, sortBy, filters });
  const sortedFilteredProducts = applyClientSortAndFilterFromUrlParams(products, sortBy, filters);

  return (
    <SharedPage 
      initialProducts = {sortedFilteredProducts} 
      handle = {handle}
      initialSort = {sortBy} 
      initialFilters={filters}
    />
  );
}

