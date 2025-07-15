import { shopifyFetch } from '@/api/shopify';
import { FETCH_COLLECTION_QUERY } from '@/lib/graphql/fetchCollection';

import styles from '@/app/collections/[handle]/page.module.css'
import ContentTop from '@/app/components/ContentTop/ContentTop';
import ProductGrid from '@/app/components/ProductGrid/ProductGrid';

type Props = { 
  params: Promise<{ handle: string }> 
};


export default async function CollectionPage({ params }: Props) {
  const { handle } = await params;
  // TODO: 여기 부분 고민해보기. 전체 불러올때는 products로 불러오고 여기서는 collection으로 불러온다면 타입일치 시키는 과정 추가적으로 필요.
  // 처음부터 타입 매칭시키는건 힘들까? RDB의 where 절 처럼?
  const collection = await shopifyFetch(FETCH_COLLECTION_QUERY, {hdl: handle});

  return (
    <section className={styles.content}>
      <ContentTop/>
      <ProductGrid products = {collection}/>
    </section>
  );
}