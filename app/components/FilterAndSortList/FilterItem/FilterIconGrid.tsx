import styles from '@/app/components/FilterAndSortList/filterAndSortList.module.css';
import { getSelectedClass } from '@/lib/utils/selectionUtils';
import { FilterValues } from '@/models/filter';
import { toggleFilter } from '@/redux/features/filter/filterSlice';
import { useAppDispatch } from '@/redux/hooks';

interface Props {
  paramKey: string;
  options: readonly {label: string, slug: string, icon?: React.ComponentType}[];
  selected?: string[];
}

export function FilterIconGrid ( { paramKey, options, selected = []}: Props ) {
  const dispatch = useAppDispatch();

  const handleClick = (option: string) => {
    dispatch(toggleFilter({ 
      key: paramKey as keyof FilterValues,
      value: option 
    }))
  }

  return (
    <div className={styles.filterIconGrid}>
      {options.map((option) => {
        const Icon = option.icon;
        return (
          <div 
            key={option.slug} 
            className={`${styles.gridItem} ${getSelectedClass('custom', option.slug, selected, styles)}`}
          >
            <button onClick={()=> handleClick(option.slug)} > 
              {Icon && <Icon/>}
              <span className={styles.buttonLabel}>{option.label}</span>
            </button>
          </div>
        )
      } )}
    </div>
  )
}

