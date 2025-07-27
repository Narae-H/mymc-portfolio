'use client'

import styles from '@/app/components/ProgressBar/progressBar.module.css';
import { discountThresholds } from '@/data/discountThresholds';
import { getProgressPercentage } from '@/lib/utils/cart/discount';
import { useAppSelector } from '@/redux/hooks';
import CartSummaryButton from './CartSummaryButton';
import DiscountProgressList from './DiscountProgressList';

export default function ProgressBar() {
  const { totalCount, totalPrice } = useAppSelector(state => state.cart);
  const progressPercentage = getProgressPercentage(totalCount);
  const maxThreshold = discountThresholds[discountThresholds.length - 1].threshold;
  const isMaxDiscount = totalCount >= maxThreshold;

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.container} container`}>
        <div className={styles.progress}>
          <div>
            <div className={styles.progressDescription}>
              <span>Save up to 15% on MEALS </span>
              <span>using our Bulk Discount.</span>
            </div>
            <DiscountProgressList
              totalCount={totalCount}
              progressPercentage={progressPercentage}
              isMaxDiscount={isMaxDiscount}
            />
          </div>
        </div>
        <CartSummaryButton totalCount={totalCount} totalPrice={totalPrice} />
      </div>
    </div>
  );
}
