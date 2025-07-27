'use client'

import { Product } from '@/models/product';
import styles from '@/app/components/ProductCard/productCard.module.css';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { addItem, removeItem } from '@/redux/features/cart/cartSlice';
import { applyDiscount } from '@/lib/utils/cart/discount';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const dispatch = useAppDispatch();
  const quantity = useAppSelector(state => state.cart.items[product.id]?.count || 0);
  const discountRate = useAppSelector( state => state.cart.currentDiscountRate);

  const handleAdd = () => dispatch(addItem({id: product.id, price: product.price}));
  const handleRemove = () => dispatch(removeItem({id: product.id, price: product.price}));

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
        <div className={`${styles.mealType} ${styles[product.categoryPrefix]}`}>
          {product.category}
        </div>
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
              <div className={`${styles.productPriceWrapper} ${discountRate>0? styles.discount : ''}`}>
                <span className={styles.discountedPrice}>${applyDiscount(product.price, discountRate).toFixed(2)} </span>
                <span className={styles.originalPrice}>${product.price}</span>
              </div>
              <span className={styles.weight}>
                {product.weight} g
              </span>
            </>
          ) : (
            <span className={styles.productPriceUnavailable}>-</span>
          )}
        </div>

        <div className={styles.cartActionWrapper} >
          { quantity > 0? (
            <div className={styles.itemCounter}>
              <button onClick = {handleRemove}>-</button>
              <span>{quantity}</span>
              <button onClick = {handleAdd}>+</button>
            </div>
          ) : (
            <div className={styles.addToCart} onClick={handleAdd} >
              Add to cart
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
