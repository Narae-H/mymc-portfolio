'use client'

import { useEffect, useState } from 'react';

import styles from '@/app/components/SharedPage/sharedPage.module.css';
import ContentTop from '@/app/components/ContentTop/ContentTop';
import ProductGrid from '@/app/components/ProductGrid/ProductGrid';
import { Product } from '@/models/product';
import { useAppSelector } from '@/redux/hooks';
import { fetchProducts } from '@/api/products';

type Props = {
  initialProducts: Product[],
  handle?: string; 
}

// TODO: 1) 여기서 filters, sortBy 넘겨줘서 products.ts에서 인자 전달하는 부분해야함.
export default function SharedPage({ initialProducts, handle }: Props) {
  const filters = useAppSelector(state => state.filter.selectedFilters);
  const sortBy = useAppSelector(state => state.sort.sortBy);

  const [products, setProducts] = useState(initialProducts);

  useEffect(() => {
    fetchProducts({ handle, sortBy })
      .then(setProducts);
  }, [handle, sortBy]);

  return (
    <section className={styles.content}>
      <ContentTop/>
      <ProductGrid products={products}/>
    </section>
  );
}

