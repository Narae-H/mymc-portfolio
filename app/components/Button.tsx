import styles from '../styles/button.module.css';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'btn-black' | 'btn-red' | 'btn-lime' | 'btn-purple';
}

export default function Button({
  children,
  onClick,
  type = 'button',
  variant = 'btn-black',
}: ButtonProps) {
  return (
    <button className={`${styles.button} ${styles[variant]}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
}
