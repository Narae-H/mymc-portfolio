import SharedPage from '@/app/components/SharedPage/SharedPage';
import { fetchProducts } from '@/api/products';
import { Product } from '@/models/product';

type Props = { 
  params: Promise<{ handle: string }> ;
};

// TODO: 1) 전역 상태 관리를 위해서 Redux Toolkit 사용 필요
export default async function Home({ params }: Props) {
  const products: Product[] = await fetchProducts();

  return (
    <SharedPage products = {products}/>
  );
}

