import { useState } from 'react';

import DropdownToggle from '../../DropdownToggle/DropdownToggle';
import { FilterIconGrid } from './FilterIconGrid';
import { FilterListGroup } from './FilterListGroup';
import { FilterToggleSwitch } from './FilterToggleSwitch';

interface Props {
  title: string;
  paramKey: string;
  type: 'radio' | 'checkbox';
  options: readonly {label: string, slug: string, icon?: React.ComponentType}[];
  selected?: string[];
}

export default function FilterItem({ title, paramKey, type, options, selected = [] }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <div className="filter-dropdown">
      <DropdownToggle label={title} isOpen={isOpen} onClick={toggle}/>
      { isOpen && renderContent(title, paramKey, type, options, selected) }
    </div>
  );
}

function renderContent (
  title: string,
  paramKey: string,
  type: 'radio' | 'checkbox',
  options: readonly {label: string, slug: string, icon?: React.ComponentType}[],
  selected: string[]
) {
  if (['Preferences'].includes(title)) {
    return (
      <FilterIconGrid
        paramKey={paramKey}
        options={options}
        selected={selected}
        />
      );
    } else if (['Dietary'].includes(title)) {
      return (
      <FilterToggleSwitch
        paramKey={paramKey}
        options={options}
        selected={selected}
      />
    );
  } else {
    return (
      <FilterListGroup
        paramKey={paramKey}
        type={type}
        options={options}
        selected={selected}
      />
    );
  }
};
