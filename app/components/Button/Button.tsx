import styles from '@/app/components/Button/button.module.css';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'btn-white' | 'btn-black' | 'btn-red' | 'btn-lime' | 'btn-purple' | 'btn-blue-text';
  size?: 'small' | 'medium' | 'large';
  style?: React.CSSProperties;
  'aria-label'?: string;
  'aria-pressed'?: boolean;
  'aria-expanded'?: boolean;
  'aria-controls'?: string;
}

export default function Button({
  children,
  onClick,
  type = 'button',
  variant = 'btn-black',
  size = 'medium',
  style,
  ...aria
}: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
      onClick={onClick}
      type={type}
      style={style}
      {...aria}
    >
      {children}
    </button>
  );
}
