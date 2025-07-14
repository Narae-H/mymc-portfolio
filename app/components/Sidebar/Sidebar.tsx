'use client';

import { useEffect, useState, useMemo } from 'react';
import { fetchProductMealTypesTree } from '@/api/products';
import { MealTypeNode } from '@/models/meal';

import styles from '@/app/components/Sidebar/sidebar.module.css';
import Button from '@/app/components/Button/Button';
import MealMenuItem from '@/app/components/MealMenuItem/MealMenuItem';
import FilterGroup from '@/app/components/FilterGroup/FilterGroup';

import { filters as FILTER_CONFIG } from '@/data/filters';

export default function Sidebar() {
  const [mealTree, setMealTree] = useState<MealTypeNode[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchProductMealTypesTree();
        setMealTree(data);
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
    <MealTypeList mealTree={mealTree} />
    <hr className={styles.divider} />
    <FilterSection
      selectedFilterCount={selectedFilterCount}
      selectedFilters={selectedFilters}
      onFilterChange={handleFilterSelect}
    />
  </div>
);
}

function MealTypeList({ mealTree }: { mealTree: MealTypeNode[] }) {
  return (
    <div className={styles.mealTypes}>
      <ul className={styles.list}>
        <li>
          <a href="/menus/meals">All Meals</a>
        </li>
        {mealTree.map((meal) => (
          <MealMenuItem
            key={meal.mealType}
            mealType={meal.mealType}
            subMealTypes={meal.subMealTypes}
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
