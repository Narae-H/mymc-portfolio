import styles from '@/app/components/ProductGrid/productGrid.module.css';
import ProductCard from '@/app/components/ProductCard/ProductCard';
import { Product } from '@/models/product';
import { IoIosSearch } from 'react-icons/io';

interface ProductGridProps {
  products: Product[];  
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className={styles.emptyState}>
        <div><IoIosSearch size={50} /></div>
        <div className={styles.emptyTitle}>We found no results.</div>
        <div className={styles.emptyMessage}>
          Try changing or clearing your filter options for more results.
        </div>
      </div>
    );
  }

  return (
    <div className={styles.productGrid}>
      <div className={styles.gridTop}>
        <h1>
          Meals <span>({products.length})</span>
        </h1>
        <p className={styles.description}>
          Enjoy our range of high-protein meals crafted by our Chef and Dietitian. Nourishing and packed with flavour.
        </p>
      </div>

      <div className={styles.gridContent}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}