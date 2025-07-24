'use client'

import { useEffect, useState } from 'react';

import { fetchProducts } from '@/api/products';
import ContentTop from '@/app/components/ContentTop/ContentTop';
import ProductGrid from '@/app/components/ProductGrid/ProductGrid';
import styles from '@/app/components/SharedPage/sharedPage.module.css';
import { SortKeyValues } from '@/data/sortConfig';
import useDidMountEffect from '@/lib/hooks/useDidMountEffect';
import { applyClientSortAndFilterFromState } from '@/lib/utils/product/productUtils';
import { FilterValues } from '@/models/filter';
import { Product } from '@/models/product';
import { setFilters } from '@/redux/features/filter/filterSlice';
import { setSort } from '@/redux/features/sort/sortSlice';
import { useAppDispatch } from '@/redux/hooks';

type Props = {
  initialProducts: Product[];
  handle?: string; 
  initialSort?: SortKeyValues; 
  initialFilters?: FilterValues;
}

export default function SharedPage(props: Props) {
  const { initialProducts, handle, initialSort, initialFilters } = props;
  const [products, setProducts] = useState(initialProducts);

  const dispatch = useAppDispatch();
  useEffect( () => {
    if( initialSort ) dispatch(setSort(initialSort));
    if( initialFilters ) dispatch( setFilters( initialFilters ));
  }, [])

  useDidMountEffect(() => {
    (async () => {
      try {
        const { products } = await fetchProducts({ handle, filters: initialFilters, sortBy: initialSort });
        const sortedFilteredProducts = applyClientSortAndFilterFromState(products, initialSort, initialFilters);

        setProducts(sortedFilteredProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    })();
  }, [handle, initialSort, initialFilters]);

  return (
    <section className={styles.content}>
      <ContentTop/>
      <ProductGrid products={products}/>
    </section>
  );
}

