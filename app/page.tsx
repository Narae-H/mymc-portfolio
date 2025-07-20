import { fetchProducts } from '@/api/products';
import SharedPage from '@/app/components/SharedPage/SharedPage';

export default async function Home() {
  const { products } = await fetchProducts();

  return (
    <SharedPage initialProducts = {products}/>
  );
}