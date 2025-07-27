import styles from '@/app/components/ProgressBar/progressBar.module.css';
import { discountThresholds } from '@/data/discountThresholds';
import { getCurrentDiscountRate, getNextDiscountRate } from '@/lib/utils/cart/discount';

interface Props {
  totalCount: number;
  progressPercentage: string;
  isMaxDiscount: boolean;
}

export default function DiscountProgressList({ totalCount, progressPercentage, isMaxDiscount }: Props) {
  return (
    <ul>
      {discountThresholds.map((item, index) => {
        const isPassed = totalCount >= item.threshold;
        const isCurrent = getCurrentDiscountRate(totalCount) === item.discountRate;
        const isInProgress = getNextDiscountRate(totalCount)?.threshold === item.threshold;

        let className = '';
        if (isPassed && !isCurrent && !isInProgress) {
          className = styles.passedDiscountRate;
        } else if (isCurrent) {
          className = styles.currentDiscountRate;
        } else if (isInProgress) {
          className = styles.inProgressDiscountRate;
        }

        return (
          <li key={index} className={`${className} ${isMaxDiscount ? styles.maxDiscountRate : ''}`}>
            {isInProgress && (
              <div className={styles.thresholdInfoWrapper}>
                <div className={styles.thresholdInfoBackground} style={{ paddingLeft: progressPercentage }}>
                  <div className={styles.thresholdInfo}>
                    {totalCount}/{item.threshold}
                  </div>
                </div>
              </div>
            )}
            <div className={`${styles.discountLabel} ${isInProgress ? styles.active : ''}`}>
              {isMaxDiscount ? 'You’re saving 15% 🎉' : `${item.discountRate}%`}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
