import { useState } from 'react';
import sidebarStyles from './../Sidebar/sidebar.module.css'
import DropdownToggle from '../DropdownToggle/DropdownToggle';

interface Props {
  mealType: string;
  subMealType?: string[];
  defaultOpen?: boolean;
}


export default function MealMenuItem({ mealType, subMealType = [], defaultOpen = false }: Props) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggle = () => setIsOpen(prev => !prev);

  if (subMealType.length === 0) {
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
          {subMealType.map((child) => (
            <li key={child}>
              <a href={`/menus/meals/${child}`}>{child}</a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}