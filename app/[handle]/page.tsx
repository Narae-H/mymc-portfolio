import { fetchProducts } from '@/api/products';
import SharedPage from '@/app/components/SharedPage/SharedPage';
import { autoParseQueryParams } from '@/lib/utils/parseQueryParams';

type Props = { 
  params: Promise<{ handle: string }> ;
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function CollectionPage({ params, searchParams }: Props) {
  const { handle } = await params;
  const queryParams = autoParseQueryParams(searchParams);
  const { products } = await fetchProducts({ handle });

  return (
    <SharedPage initialProducts = {products} handle = {handle} queryParams= {queryParams}/>
  );
}