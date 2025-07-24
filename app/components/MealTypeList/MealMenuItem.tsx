'use client'

import { useState } from 'react';
import Link from 'next/link';

import styles from '@/app/components/MealTypeList/mealTypeList.module.css'
import DropdownToggle from '@/app/components/DropdownToggle/DropdownToggle';
import { MealType } from '@/models/meal';
import { getLastPathSegment } from '@/lib/utils/urlHelpers'

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
        <Link href={getLastPathSegment(mealType.url)} key={mealType.id}>
          {mealType.title}
        </Link>
      </li>
    );
  }

  return (
    <li>
      <DropdownToggle label={mealType.title} isOpen={isOpen} onClick={toggle} />
      {isOpen && (
        <ul className={styles.subList}>
          {mealType.items.map((child) => (
            <li key={child.id}>
              <Link href={getLastPathSegment(child.url)} key={child.url}>
                {child.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}