import { fetchProducts } from '@/api/products';
import SharedPage from '@/app/components/SharedPage/SharedPage';
import { autoParseQueryParams } from '@/lib/utils/parseQueryParams';

type Props = { 
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Home({ searchParams }: Props) {
  const { products } = await fetchProducts();
  const queryParams = autoParseQueryParams(searchParams);

  return (
    <SharedPage initialProducts = {products} queryParams= {queryParams}/>
  );
}