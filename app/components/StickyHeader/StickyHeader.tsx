
import { BsChatLeftDotsFill } from "react-icons/bs";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";

import Button from '@/app/components/Button/Button';
import styles from '@/app/components/StickyHeader/stickyHeader.module.css';
import Link from "next/link";


export default function StickyHeader() {
  return (
    <header className={styles.stickyWrapper}>
      <div className={`${styles.headerContainer} container`}>
        <a href="/" className={styles.headerLogo}>
          <img alt="My Muscle Chef" loading="lazy" decoding="async" data-nimg="1" src="https://www.datocms-assets.com/81001/1666837322-01_mymc_blk.svg"/>
        </a>
        <div className={styles.headerMenus}>
          <nav className={styles.nav}>
            <Link href="/">All Meals</Link>
            <Link href="#">Meal Plans</Link>
          </nav>
          <div className={styles.buttonWrapper}>
            <Button variant="btn-red">Start Your order</Button>
            <div className={styles.divHidden}></div>
          </div>
        </div>
        <div className={styles.headerActions}>
          <ul>
            <li><BsChatLeftDotsFill size={24} aria-label="Chat" title="Chat" style={{ color: 'var(--bg-red)' }} /></li>
            <li><VscAccount size={24} aria-label="User Account" title="User Account"/></li>
            <li><IoSearchOutline size={24} aria-label="Search" title="Search"/></li>
            <li><IoCartOutline size={24} aria-label="Cart" title="Cart"/></li>
          </ul>
        </div>
        <div>

        </div>
      </div>
    </header>
  )
}