import styles from '@/app/components/ProductGrid/productGrid.module.css';
import ProductCard from '@/app/components/ProductCard/ProductCard';
import { Product } from '@/models/product';

interface ProductGridProps {
  products: Product[];  
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className={styles.productGrid}>
      <div className={styles.gridTop}>
        <div><h1>Meals <span>({products.length})</span></h1></div>
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