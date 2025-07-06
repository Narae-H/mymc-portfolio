'use client'; 

import { useEffect, useState } from 'react';
import { fetchProducts } from '../../../lib/shopify';

import styles from './productGrid.module.css';
import ProductCard from '../ProductCard/ProductCard';
import { Product } from '@/models/product';

export default function ProductGrid() {
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
    <div className={styles.productGrid}>
      <div className={styles.gridTop}>
        <div><h1>Meals <span>(85)</span></h1></div>
        <div className={styles.description}>Enjoy our range of high-protein meals crafted by our Chef and Dietitian. Nourishing and packed with flavour.</div>
      </div>

      <div className={styles.gridContent}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>  
  )
}