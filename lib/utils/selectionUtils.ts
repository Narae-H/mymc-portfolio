export type FilterType = 'radio' | 'checkbox' | 'custom';

export const isChecked = (
  type: FilterType,
  option: string,
  selected: string[]
): boolean => {
  return type === 'radio'
    ? selected[0] === option
    : selected.includes(option);
};

export const getSelectedClass = (
  type: FilterType,
  option: string,
  selected: string[],
  styles: { [key: string]: string }
): string => {
  return isChecked(type, option, selected)? styles.selected : '';
};