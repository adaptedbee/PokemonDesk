import React from 'react';
import cn from 'classnames';

import s from './Button.module.scss';

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  fullWidth?: boolean;
  isYellow?: boolean;
  size?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, fullWidth, isYellow, size }) => {
  return (
    <button
      type="button"
      className={cn(s.button, {
        fullWidth,
        yellow: isYellow,
        smallSize: size === 'small',
      })}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
