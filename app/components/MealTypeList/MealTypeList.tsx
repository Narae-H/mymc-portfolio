import styles from '@/app/components/MealTypeList/mealTypeList.module.css';
import MealMenuItem from '@/app/components/MealTypeList/MealMenuItem';
import { fetchProductMealTypesTree } from '@/api/products';
import Link from 'next/link';

export async function MealTypeList() {
  const mealTypes = await fetchProductMealTypesTree();

  return (
    <div className={styles.mealTypes}>
      <ul className={styles.list}>
        <li>
          <Link href="/">All Meals</Link>
        </li>
        {mealTypes.map((mealType) => (
          <MealMenuItem
            key={mealType.id}
            mealType={mealType}
          />
        ))}
      </ul>
    </div>
  );
}