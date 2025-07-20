'use client'

import Button from '@/app/components/Button/Button';
import FilterItem from '@/app/components/FilterAndSortList/FilterItem';
import styles from '@/app/components/FilterAndSortList/filterAndSortList.module.css';
import { sortAndFilters as SORT_FILTER_CONFIG } from '@/data/sortAndFilters';
import { clearFilters, toggleFilter } from '@/redux/features/filter/filterSlice';
import { setSort } from '@/redux/features/sort/sortSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useRouter, useSearchParams } from 'next/navigation';

export function FilterAndSortList() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const { selectedFilters, selectedFilterCount } = useAppSelector(state => state.filter);
  const { sortBy } = useAppSelector(state => state.sort);

  const updateSearchParams = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className={styles.sort}>
      <Button type="button" variant="btn-blue-text" onClick = { () =>dispatch(clearFilters()) }>
        Clear all
      </Button>

      <div className={styles.heading1}>
        Filter & Sort <span>({selectedFilterCount})</span>
      </div>

      <div className="filter-panel">
        {SORT_FILTER_CONFIG.map(({ title, key, options, type }) => (
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
              if (type === 'radio') {
                dispatch(setSort(option));
                updateSearchParams('sort', option);
              } else {
                dispatch(toggleFilter({ key, value: option }));
              }
            }}
          />
        ))}
      </div>
    </div>
  );
}