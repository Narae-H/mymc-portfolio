import { useState } from 'react';

import sidebarStyles from '@/app/components/Sidebar/sidebar.module.css'
import DropdownToggle from '@/app/components/DropdownToggle/DropdownToggle';

interface Props {
  mealType: string;
  subMealTypes?: string[];
  defaultOpen?: boolean;
}


export default function MealMenuItem({ mealType, subMealTypes = [], defaultOpen = false }: Props) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggle = () => setIsOpen(prev => !prev);

  if (subMealTypes.length === 0) {
    return (
      <li>
        <a href={`/menus/meals/${mealType}`}>{mealType}</a>
      </li>
    );
  }

  return (
    <li>
      <DropdownToggle label={mealType} isOpen={isOpen} onClick={toggle} />
      {isOpen && (
        <ul className={sidebarStyles.subList}>
          {subMealTypes.map((child) => (
            <li key={child}>
              <a href={`/menus/meals/${child}`}>{child}</a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}