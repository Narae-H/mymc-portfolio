'use client'

import Button from '@/app/components/Button/Button';
import FilterItem from '@/app/components/FilterAndSortList/FilterItem';
import styles from '@/app/components/FilterAndSortList/filterAndSortList.module.css';
import { filters as FILTER_CONFIG } from '@/data/filters';
import { clearFilters, toggleFilter } from '@/redux/features/filter/filterSlice';
import { setSort } from '@/redux/features/sort/sortSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

export function FilterAndSortList() {
  const dispatch = useAppDispatch();
  
  const { selectedFilters, selectedFilterCount } = useAppSelector(state => state.filter);
  const { sortBy } = useAppSelector(state => state.sort);

  return (
    <div className={styles.sort}>
      <Button type="button" variant="btn-blue-text" onClick = { () =>dispatch(clearFilters()) }>
        Clear all
      </Button>

      <div className={styles.heading1}>
        Filter & Sort <span>({selectedFilterCount})</span>
      </div>

      <div className="filter-panel">
        {FILTER_CONFIG.map(({ title, key, options, type }) => (
          <FilterItem
            key={title}
            title={title}
            type={type}
            options={options}
            selected={
              type === 'radio'
                ? [sortBy]
                : selectedFilters[key]
            }
            onChange={(option) => {
              type === 'radio'
                ? dispatch(setSort(option))
                : dispatch(toggleFilter({ key, value: option }));
            }}
          />
        ))}
      </div>
    </div>
  );
}