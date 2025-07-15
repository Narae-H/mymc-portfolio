'use client';

import styles from '@/app/styles/page.module.css';

import ContentTop from '@/app/components/ContentTop/ContentTop';
import ProductGrid from '@/app/components/ProductGrid/ProductGrid';
import { useEffect, useState } from 'react';
import { Product } from '@/models/product';
import { fetchProducts } from '@/api/products';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading products...</p>;

  return (
    <section className={styles.content}>
      <ContentTop/>
      <ProductGrid products={products}/>
    </section>
  );
}

