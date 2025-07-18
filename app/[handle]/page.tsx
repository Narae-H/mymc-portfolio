import SharedPage from '@/app/components/SharedPage/SharedPage';
import { fetchProducts } from '@/api/products';
import { Product } from '@/models/product';

type Props = { 
  params: Promise<{ handle: string }> ;
};

export default async function CollectionPage({ params }: Props) {
  const { handle } = await params;
  const initialProducts: Product[] = await fetchProducts({ handle });

  return (
    <SharedPage initialProducts = {initialProducts} handle = {handle}/>
  );
}