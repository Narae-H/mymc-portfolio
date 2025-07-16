import SharedPage from '@/app/components/SharedPage/SharedPage';
import { fetchCollectionWithProducts } from '@/api/products';
import { Product } from '@/models/product';

type Props = { 
  params: Promise<{ handle: string }> ;
};

export default async function CollectionPage({ params }: Props) {
  const { handle } = await params;
  const products: Product[] = await fetchCollectionWithProducts( {keyword: handle} );

  return (
    <SharedPage products = {products}/>
  );
}