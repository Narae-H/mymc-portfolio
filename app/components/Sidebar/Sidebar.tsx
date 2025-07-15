'use client';

import { useEffect, useMemo, useState } from 'react';

import { fetchProductMealTypesTree } from '@/api/products';
import { filters as FILTER_CONFIG } from '@/data/filters';
import { MealType } from '@/models/meal';

import Button from '@/app/components/Button/Button';
import FilterGroup from '@/app/components/FilterGroup/FilterGroup';
import MealMenuItem from '@/app/components/MealMenuItem/MealMenuItem';
import styles from '@/app/components/Sidebar/sidebar.module.css';


export default function Sidebar() {
  const [mealTypes, setmealTypes] = useState<MealType[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});

  useEffect(() => {
    const loadData = async () => {
      try {
        const mealTypes = await fetchProductMealTypesTree();
        setmealTypes(mealTypes);
        // const mealTag = await fetchProductPreferences();
      } catch (err) {
        console.error(err);
      } 
    };
    loadData();
  }, []);

  const handleFilterSelect = (title: string, option: string) => {
    setSelectedFilters((prev) => {
      const prevSelected = prev[title] || [];
      const isRadio = FILTER_CONFIG.find((f) => f.title === title)?.type === 'radio';

      const updated = isRadio
        ? [option]
        : prevSelected.includes(option)
        ? prevSelected.filter((o) => o !== option)
        : [...prevSelected, option];

      return { ...prev, [title]: updated };
    });
  };

  const selectedFilterCount = useMemo(() => {
    return Object.values(selectedFilters).reduce((sum, list) => sum + list.length, 0);
  }, [selectedFilters]);

  return (
  <div className={styles.sidebar}>
    <MealTypeList mealTypes={mealTypes} />
    <hr className={styles.divider} />
    <FilterSection
      selectedFilterCount={selectedFilterCount}
      selectedFilters={selectedFilters}
      onFilterChange={handleFilterSelect}
    />
  </div>
);
}

function MealTypeList({ mealTypes }: { mealTypes: MealType[] }) {
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

function FilterSection({
  selectedFilterCount,
  selectedFilters,
  onFilterChange,
}: {
  selectedFilterCount: number;
  selectedFilters: Record<string, string[]>;
  onFilterChange: (title: string, option: string) => void;
}) {
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
          <FilterGroup
            key={title}
            title={title}
            type={type}
            options={options}
            selected={selectedFilters[title] || []}
            onChange={(option) => onFilterChange(title, option)}
          />
        ))}
      </div>
    </div>
  );
}
