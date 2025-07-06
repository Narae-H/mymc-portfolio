'use client';

import styles from './styles/page.module.css';

import ProgressBar from './components/ProgressBar/ProgressBar';
import Sidebar from './components/Sidebar/Sidebar';
import ProductGrid from './components/ProductGrid/ProductGrid';
import ContentTop from './components/ContentTop/ContentTop';
import StickyHeader from './components/StickyHeader/StickyHeader';

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
