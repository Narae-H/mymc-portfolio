import styles from '@/app/components/TopHeader/topHeader.module.css'

export default function Header() {
  return (
    <>
      <div className={styles.topHeader}>
        <div className={styles.info}>
          A clone of the <a href='https://www.mymusclechef.com/menu/meals?sort=featured' target="_blank" rel="noopener noreferrer">My Muscle Chef </a> page, built as part of my portfolio.
        </div>
      </div>
    </>
  )
}