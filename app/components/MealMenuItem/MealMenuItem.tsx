import { useState } from 'react';

import sidebarStyles from '@/app/components/Sidebar/sidebar.module.css'
import DropdownToggle from '@/app/components/DropdownToggle/DropdownToggle';
import { MealType } from '@/models/meal';
import Link from 'next/link';
import { extractRelative } from '@/lib/utils/extractRelative';

interface Props {
  mealType: MealType;
  defaultOpen?: boolean;
}


export default function MealMenuItem({ mealType, defaultOpen = false }: Props) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggle = () => setIsOpen(prev => !prev);

  if (mealType.items.length === 0) {
    return (
      <li>
        {/* <a href={mealType.url}>{mealType.title}</a> */}
        <Link href={extractRelative(mealType.url)} key={mealType.url}>
          {mealType.title}
        </Link>
      </li>
    );
  }

  return (
    <li>
      <DropdownToggle label={mealType.title} isOpen={isOpen} onClick={toggle} />
      {isOpen && (
        <ul className={sidebarStyles.subList}>
          {mealType.items.map((child) => (
            <li key={child.id}>
              {/* <a href={child.url}>{child.title}</a> */}
              <Link href={extractRelative(child.url)} key={child.url}>
                {child.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}