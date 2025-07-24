'use client'

import Button from '@/app/components/Button/Button';
import FilterItem from '@/app/components/FilterAndSortList/FilterItem/FilterItem';
import styles from '@/app/components/FilterAndSortList/filterAndSortList.module.css';
import { sortAndFilters as SORT_FILTER_CONFIG } from '@/data/sortAndFilters';
import useDidMountEffect from '@/lib/hooks/useDidMountEffect';
import { clearFilters } from '@/redux/features/filter/filterSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useRouter } from 'next/navigation';

export function FilterAndSortList() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  
  const { sortBy } = useAppSelector(state => state.sort);
  const { selectedFilters, selectedFilterCount } = useAppSelector(state => state.filter);

  useDidMountEffect( () => {
    const params = new URLSearchParams();

    params.set('sort', sortBy.toString() );

    Object.entries(selectedFilters).forEach(([key, values]) => {
      if (values.length > 0) {
        params.set(key, values.join(','));
      }
    });

    const pathname = window.location.pathname;
    router.push(`${pathname}?${params.toString()}`);

  }, [sortBy, selectedFilters]);

  return (
    <div className={styles.sort}>
      <Button type="button" variant="btn-blue-text" onClick = { () =>dispatch(clearFilters()) }>
        Clear all
      </Button>

      <div className={styles.heading1}>
        Filter & Sort <span>({selectedFilterCount})</span>
      </div>

      <div className="filter-panel">
        {SORT_FILTER_CONFIG.map(({ title, paramKey, options, type }) => (
          <FilterItem
            key={title}
            paramKey = {paramKey}
            title={title}
            type={type}
            options={options}
            selected={
              type === 'radio'
                ? [sortBy]
                : selectedFilters[paramKey]
            }
          />
        ))}
      </div>
    </div>
  );
}