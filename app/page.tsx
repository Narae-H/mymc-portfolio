import SharedPage from '@/app/components/SharedPage/SharedPage';
import { fetchProducts } from '@/api/products';
import { Product } from '@/models/product';

export default async function Home() {
  const products: Product[] = await fetchProducts();

  return (
    <SharedPage products = {products}/>
  );
}

