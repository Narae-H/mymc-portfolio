'use client'

import { useMemo, useState } from 'react';

import { filters as FILTER_CONFIG } from '@/data/filters';
import Button from '@/app/components/Button/Button';
import FilterItem from '@/app/components/FilterAndSortList/FilterItem';
import styles from '@/app/components/FilterAndSortList/filterAndSortList.module.css';

export function FilterAndSortList() {
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});
  const [sortOption, setSortOption] = useState<string>('');

  const handleFilterSelect = (title: string, option: string) => {
    if (title === 'Sort') {
      setSortOption(option);
      return;
    }

    setSelectedFilters((prev) => {
      const prevSelected = prev[title] || [];

      const updated = prevSelected.includes(option)
        ? prevSelected.filter((o) => o !== option)
        : [...prevSelected, option];

      return { ...prev, [title]: updated };
   });
  }

  const selectedFilterCount = useMemo(() => {
    return Object.entries(selectedFilters)
      .reduce((sum, [title, list]) => sum + list.length, 0);
  }, [selectedFilters]);

  return (
    <div className={styles.sort}>
      <Button type="button" variant="btn-blue-text">
        Clear all
      </Button>

      <div className={styles.heading1}>
        Filter & Sort <span>({selectedFilterCount})</span>
      </div>

      <div className="filter-panel">
        {FILTER_CONFIG.map(({ title, options, type }) => (
          <FilterItem
            key={title}
            title={title}
            type={type}
            options={options}
            selected={
              type === 'radio'
              ? [sortOption]
              :selectedFilters[title] || []
            }
            onChange={(option) => handleFilterSelect(title, option)}
          />
        ))}
      </div>
    </div>
  );
}