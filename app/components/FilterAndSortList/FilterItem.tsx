import { useState } from 'react';

import DropdownToggle from '../DropdownToggle/DropdownToggle';
import sidebarStyles from '@/app/components/Sidebar/sidebar.module.css'
import styles from '@/app/components/FilterAndSortList/filterAndSortList.module.css'

interface Props {
  title: string;
  type: 'radio' | 'checkbox';
  options: readonly {label: string, slug: string}[];
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
            <li key={option.slug}>
              <label>
                <input
                  type={type}
                  name={title}
                  checked={isChecked(type, option.slug, selected)}
                  onChange={() => handleChange(option.slug)}
                />
                <span>{option.label}</span>
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const isChecked = (
  type: string, 
  option: string,
  selected: string[] 
) => {
  return type === "radio"
  ? selected[0] === option
  : Array.isArray(selected) && selected.includes(option); 
}