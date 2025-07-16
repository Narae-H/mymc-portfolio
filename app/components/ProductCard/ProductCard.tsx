import { Product } from '@/models/product';
import styles from '@/app/components/ProductCard/productCard.module.css';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className={styles.productCard}>
      <div className={styles.imageWrapper}>
        {product.imageURL && (
          <img
            src={product.imageURL}
            alt={product.imageAlt || product.title}
            className={styles.productImage}
            loading='lazy'
          />
        )}
        <div className={`${styles.mealType} ${styles[product.categoryPrefix]}`}>{product.category}</div>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.info}>
          <span >{product.calories} <span className={styles[`f-400`]}>CAL</span></span>
          <span>{product.protein} <span className={styles[`f-400`]}>P</span></span>
          <span>{product.carbs} <span className={styles[`f-400`]}>C</span></span>
          <span>{product.fat} <span className={styles[`f-400`]}>F</span></span>
        </div>
        <div className={styles.product}>
          <div className={styles.productTitle}>{product.title}</div>
        </div>  
        <div className={styles.productContent}>
          {product.price ? (
            <>
              <span className={styles.productPrice}>
                {product.price} {product.currency}
              </span>
              <span className={styles.weight}>
                450g
              </span>
            </>
          ) : (
            <span className={styles.productPriceUnavailable}>-</span>
          )}
        </div>
        <div className={styles.addToCart}>
          Add to cart
        </div>

      </div>
    </div>
  );
}
