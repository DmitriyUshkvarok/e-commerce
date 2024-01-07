import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './_button.module.scss';

type Props = {
  onClick?: () => void;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  className?: string;
  children: ReactNode;
  disabled: boolean;
};

export default function Button({
  onClick,
  className,
  type = 'button',
  children,
  disabled,
}: Readonly<Props>) {
  const combinedClasses = `${styles.button} ${className ?? ''}`;

  return (
    <button
      className={combinedClasses}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
