import { useState } from 'react';

import DropdownToggle from '../DropdownToggle/DropdownToggle';
import sidebarStyles from '@/app/components/Sidebar/sidebar.module.css'
import styles from '@/app/components/FilterAndSortList/filterAndSortList.module.css'

interface Props {
  title: string;
  type: 'radio' | 'checkbox';
  options: readonly string[];
  selected?: string[];
  onChange?: (option: string) => void;
}

export default function FilterItem({ title, type, options, selected = [], onChange }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);
  const handleChange = (option: string) => {
    onChange?.(option);
  };

  return (
    <div className="filter-dropdown">
      <DropdownToggle label={title} isOpen={isOpen} onClick={toggle}/>
      {isOpen && (
        <ul className={`${sidebarStyles.list} ${styles.list}`}>
          {options.map((option) => (
            <li key={option}>
              <label>
                <input
                  type={type}
                  name={title}
                  checked={selected.includes(option)}
                  onChange={() => handleChange(option)}
                />
                <span>{option}</span>
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}