
import Button from '../Button/Button';
import styles from './progressBar.module.css';

export default function ProgressBar() {
  return (
    <div className={styles.wrapper}>
       <div className={`${styles.container} container`}>
          <div className={styles.progress}>
            <div>
              <div>
                <span>Save up to 15% on MEALS </span> 
                <span>using our Bulk Discount.</span>
              </div>
              <ul>
                <li className={styles.currentProgress}>
                  <div className={styles.itemCnt}>
                    0/13
                  </div>
                  <div className={styles.discountFig}>
                    2.5%
                  </div>
                </li>
                <li>5%</li>
                <li>10%</li>
                <li>15%</li>
              </ul>
            </div>
            <div>
            </div>
          </div>

          <div className={styles.viewCart}>
            <Button
              type = 'button'
              variant = 'btn-black'
              size = 'large'
              style={{ fontSize: '16px', width: '20rem' }}
            >
              <div className={styles.buttonContentWrapper}>
                <div className={styles.itemCnt}>
                  View Cart (0)  
                </div>
                <div className={styles.itemTotalPrice}>
                  $0.00
                </div>

              </div>
            </Button>
          </div>
      </div>
    </div>
  )
}