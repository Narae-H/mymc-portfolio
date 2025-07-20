import { fetchProducts } from '@/api/products';
import SharedPage from '@/app/components/SharedPage/SharedPage';

type Props = { 
  params: Promise<{ handle: string }>;
};

export default async function CollectionPage({ params}: Props) {
  const { handle } = await params;
  const { products } = await fetchProducts({ handle });

  return (
    <SharedPage initialProducts = {products} handle = {handle}/>
  );
}