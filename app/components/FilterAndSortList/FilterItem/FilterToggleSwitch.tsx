import styles from '@/app/components/FilterAndSortList/filterAndSortList.module.css';
import { getSelectedClass } from '@/lib/utils/selectionUtils';
import { FilterValues } from '@/models/filter';
import { toggleFilter } from '@/redux/features/filter/filterSlice';
import { useAppDispatch } from '@/redux/hooks';
import { useState } from 'react';

interface Props {
  paramKey: string;
  options: readonly {label: string, slug: string}[];
  selected?: string[];
}

export function FilterToggleSwitch ( { paramKey, options, selected = [] }: Props ) {
  const dispatch = useAppDispatch();

  const handleClick = (option: string) =>{
    dispatch(toggleFilter({ 
      key: paramKey as keyof FilterValues,
      value: option 
    }));
    
  }

  return (
    <div className={`${styles.filterToggleSwitch} ${styles.filterIconGrid}`}>
      {options.map((option) => (
        <div 
          key={option.slug} 
          className={`${styles.gridItem}`}
        >
          <span>{option.label}</span>
          <div 
            className={`${styles.switchWrapper} ${getSelectedClass('custom', option.slug, selected, styles)}`} 
            onClick={ () => handleClick(option.slug)}
          >
            <div className={`${styles.switch}`}>
            </div>
          </div>  
        </div>
      ))}
      <div className={styles.warning}>
        *Allergen Disclaimer: Please note, due to other foods we prepare and handle at My Muscle Chef, there may be traces of milk, eggs, gluten, peanuts, other nuts and seafood. Therefore, we cannot guarantee our products are completely free from these allergens. Please be aware of this risk should you have any food allergies as we will not assume any liability for adverse reactions from My Muscle Chef products.
      </div>  
    </div>
  )
}
