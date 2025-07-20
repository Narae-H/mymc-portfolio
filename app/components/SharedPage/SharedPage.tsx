'use client'

import { useState } from 'react';

import { fetchProducts } from '@/api/products';
import ContentTop from '@/app/components/ContentTop/ContentTop';
import ProductGrid from '@/app/components/ProductGrid/ProductGrid';
import styles from '@/app/components/SharedPage/sharedPage.module.css';
import { METAFIELD_SORT_CONFIG } from '@/data/sortConfig';
import useDidMountEffect from '@/lib/hooks/useDidMountEffect';
import { clientSortProducts } from '@/lib/utils/clientSortProducts';
import { isMetafieldSortKey, isShopifySortKey } from '@/lib/utils/typeGuards';
import { Product } from '@/models/product';
import { selectSelectedFilters } from '@/redux/features/filter/filterSelectors';
import { useAppSelector } from '@/redux/hooks';

type Props = {
  initialProducts: Product[];
  handle?: string; 
}

export default function SharedPage({ initialProducts, handle}: Props) {
  const filters = useAppSelector(selectSelectedFilters);
  const sortBy = useAppSelector(state => state.sort.sortBy);

  const [products, setProducts] = useState(initialProducts);

  useDidMountEffect( ()=> {
    if (!sortBy || (!isShopifySortKey(sortBy) && !isMetafieldSortKey(sortBy))) return;

    fetchProducts({ handle, filters, sortBy })
      .then( (data) => {
        const initialProducts: Product[] = data.needsClientSort
        ? clientSortProducts(products, data.sortBy as keyof typeof METAFIELD_SORT_CONFIG)
        : data.products;

        setProducts(initialProducts);
      });
  }, [handle, filters, sortBy])

  return (
    <section className={styles.content}>
      <ContentTop/>
      <ProductGrid products={products}/>
    </section>
  );
}

