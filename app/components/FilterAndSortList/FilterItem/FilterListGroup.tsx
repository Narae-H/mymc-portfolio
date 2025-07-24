'use Client'

import sidebarStyles from '@/app/components/Sidebar/sidebar.module.css'
import styles from '@/app/components/FilterAndSortList/filterAndSortList.module.css'
import { isChecked } from '@/lib/utils/selectionUtils';
import { setSort } from '@/redux/features/sort/sortSlice';
import { toggleFilter } from '@/redux/features/filter/filterSlice';
import { useAppDispatch } from '@/redux/hooks';
import { FilterValues } from '@/models/filter';

interface Props {
  paramKey: string;
  type: 'radio' | 'checkbox';
  options: readonly {label: string, slug: string}[];
  selected?: string[];
}

export function FilterListGroup ( { paramKey, type, options, selected = [] }: Props ) {
  const dispatch = useAppDispatch();
  
  const handleClick = (option: string) => {
    if (type === 'radio') {
      dispatch(setSort(option));
    } else {
      dispatch(toggleFilter({ 
        key: paramKey as keyof FilterValues,
        value: option 
    }));
    }
  }

  return (
    <ul className={`filterListGroup ${sidebarStyles.list} ${styles.list}`}>
      {options.map((option) => (
        <li key={option.slug}>
          <label>
            <input
              type={type}
              checked={isChecked(type, option.slug, selected)}
              onChange={() => handleClick(option.slug)}
            />
            <span>{option.label}</span>
          </label>
        </li>
      ))}
    </ul>
  )
}