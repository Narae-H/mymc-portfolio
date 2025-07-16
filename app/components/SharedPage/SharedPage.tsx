import styles from '@/app/components/SharedPage/sharedPage.module.css';

import ContentTop from '@/app/components/ContentTop/ContentTop';
import ProductGrid from '@/app/components/ProductGrid/ProductGrid';
import { Product } from '@/models/product';

type Props = {
  products: Product[] 
}

export default async function SharedPage({ products }: Props) {
  return (
    <section className={styles.content}>
      <ContentTop/>
      <ProductGrid products={products}/>
    </section>
  );
}

