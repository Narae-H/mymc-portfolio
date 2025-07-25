import styles from '@/app/components/MealTypeList/mealTypeList.module.css';
import MealMenuItem from '@/app/components/MealTypeList/MealMenuItem';
import { fetchProductMealTypesTree } from '@/api/products';

export async function MealTypeList() {
  const mealTypes = await fetchProductMealTypesTree();

  return (
    <div className={styles.mealTypes}>
      <ul className={styles.list}>
        <li>
          <a href="/">All Meals</a>
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