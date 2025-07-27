import { MealTypeList } from '@/app/components/MealTypeList/MealTypeList';
import styles from '@/app/components/Sidebar/sidebar.module.css';
import { FilterAndSortList } from '../FilterAndSortList/FilterAndSortList';

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <MealTypeList />
      <hr className={styles.divider} />
      <FilterAndSortList />
    </div>
  );
}
