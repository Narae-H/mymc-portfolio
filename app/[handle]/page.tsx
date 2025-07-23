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

// TODO: page.tsx참고해서 searchParams 받아와서 sort, filter 부분 추가해야함.
// 참고해서 추가했는데 왜 인지 sort, filter 둘 다 반영 안됨. 쿼리에서도 metafields 정렬에서도
export default async function CollectionPage({ params, searchParams }: Props) {
  const { handle } = await params;
  const parsedParams: Record<string, string> = await searchParams;

  const sortBy: SortKeyValues = parseSortByFromParams(parsedParams);
  const filters: FilterValues = parseFiltersFromParams(parsedParams);
  
  const { products } = await fetchProducts({ handle, sortBy, filters });
  const sortedFilteredProducts = applyClientSortAndFilterFromUrlParams(products, sortBy, filters);

  return (
    <SharedPage initialProducts = {sortedFilteredProducts} handle = {handle}/>
  );
}

