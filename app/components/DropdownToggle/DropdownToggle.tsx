import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import styles from '@/app/components/DropdownToggle/dropdownToggle.module.css'

interface Props {
  label: string;
  isOpen: boolean;
  onClick: () => void;
}

export default function DropdownToggle({ label, isOpen, onClick }: Props) {
  return (
    <div onClick={onClick} className={styles.dropdownToggle}>
      {label} 
      <span>
        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </span>
    </div>
  );
}
