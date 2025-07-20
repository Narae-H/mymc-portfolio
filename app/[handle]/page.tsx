import { fetchProducts } from '@/api/products';
import SharedPage from '@/app/components/SharedPage/SharedPage';

type Props = { 
  params: { handle: string };
  // searchParams?: { [key: string]: string | string[] | undefined };
};

export default async function CollectionPage({ params}: Props) {
  const { handle } = params;
  // const queryParams = autoParseQueryParams(searchParams);
  const { products } = await fetchProducts({ handle });

  return (
    <SharedPage initialProducts = {products} handle = {handle}/>
  );
}