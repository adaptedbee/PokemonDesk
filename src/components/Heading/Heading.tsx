import React from 'react';
import cn from 'classnames';

import s from './Heading.module.scss';

interface HeadingProps {
  size: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ children, size, className }) => {
  const Tag = size;

  return <Tag className={cn(s.headline, className)}>{children}</Tag>;
};

export default Heading;
