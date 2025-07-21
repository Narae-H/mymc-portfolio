import { fetchProducts } from '@/api/products';
import SharedPage from '@/app/components/SharedPage/SharedPage';

type props = {
  searchParams: Promise<Record<string, string>>;
}

export default async function Home( {searchParams} : props ) {
  const parsedParams = await searchParams;
  // TODO 1. parsedParams이용해서 sort와 filters 가져오기
  // const sort = parsedParams.sort ?? DEFAULT_FILTER_VALUES.sort;
  // const filters = parseFiltersFromParams(parsedParams);


  const { products } = await fetchProducts();
  // 2. sort, filters arguments 넘겨서 초기 데이터 가져오기
  // const { products } = await fetchProducts({ sortBy: sort, filters: parsedFilters});

  return (
    <SharedPage initialProducts = {products}/>
    // 3. sort, filters를 같이 넘기기 SharedPage에서 추가처리할 수 있도록 함.
    // <SharedPage 
    //   initialProducts = {products} 
    //   initialSort = {initialSort} 
    //   initialFilters={filters}
    // />
  );
}