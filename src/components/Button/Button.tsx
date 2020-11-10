import React from 'react';
import cn from 'classnames';

import s from './Button.module.scss';

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  fullWidth?: boolean;
  color?: string;
  size?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, fullWidth, color, size }) => {
  return (
    <button
      type="button"
      className={cn(s.button, {
        fullWidth,
        yellow: color === 'yellow',
        smallSize: size === 'small',
      })}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
