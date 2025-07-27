import Button from '@/app/components/Button/Button';
import styles from '@/app/components/ProgressBar/progressBar.module.css';

interface Props {
  totalCount: number;
  totalPrice: number;
}

export default function CartSummaryButton({ totalCount, totalPrice }: Props) {
  return (
    <div className={styles.viewCart}>
      <Button
        type="button"
        variant="btn-black"
        size="large"
        style={{ fontSize: '16px', width: '20rem' }}
      >
        <div className={styles.buttonContentWrapper}>
          <div className={styles.itemCount}>
            View Cart ({totalCount})
          </div>
          <div className={styles.itemTotalPrice}>
            ${totalCount === 0 ? '0.00' : totalPrice.toFixed(2)}
          </div>
        </div>
      </Button>
    </div>
  );
}
