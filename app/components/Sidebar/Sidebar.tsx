import { MealTypeList } from '@/app/components/MealTypeList/MealTypeList';
import { FilterAndSortList } from '../FilterAndSortList/FilterAndSortList';
import styles from '@/app/components/Sidebar/sidebar.module.css';


export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <MealTypeList />
      <hr className={styles.divider} />
      <FilterAndSortList />
    </div>
  );
}
