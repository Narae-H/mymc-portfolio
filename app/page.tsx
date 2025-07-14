'use client';

import styles from './styles/page.module.css';

import StickyHeader from '@/app/components/StickyHeader/StickyHeader';
import ProgressBar from '@/app/components/ProgressBar/ProgressBar';
import Sidebar from '@/app/components/Sidebar/Sidebar';
import ProductGrid from '@/app/components/ProductGrid/ProductGrid';
import ContentTop from '@/app/components/ContentTop/ContentTop';

export default function Home() {
  return (
    <>
      <StickyHeader />
      <main className={`${styles.main} container`}>
        <div className={styles.layoutRow}>
          <aside className={styles.sidebar}>
            <Sidebar />
          </aside>
          <section className={styles.content}>
            <ContentTop/>
            <ProductGrid/>
          </section>
        </div>
      </main>
      <ProgressBar />
    </>
  );
}
