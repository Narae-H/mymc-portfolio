import { fetchProducts } from '@/api/products';
import SharedPage from '@/app/components/SharedPage/SharedPage';

type Props = { 
  params: Promise<{ handle: string }>;
};

// TODO: page.tsx참고해서 searchParams 받아와서 sort, filter 부분 추가해야함.
export default async function CollectionPage({ params}: Props) {
  const { handle } = await params;
  const { products } = await fetchProducts({ handle });

  return (
    <SharedPage initialProducts = {products} handle = {handle}/>
  );
}