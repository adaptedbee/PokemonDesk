import React from 'react';

import s from './Heading.module.scss';

interface HeadingProps {
  size: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Heading: React.FC<HeadingProps> = ({ children, size }) => {
  const Tag = size;

  return <Tag className={s.headline}>{children}</Tag>;
};

export default Heading;
