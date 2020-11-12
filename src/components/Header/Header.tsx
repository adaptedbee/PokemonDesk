import React from 'react';
import cn from 'classnames';
import { A, usePath } from 'hookrouter';
import { LinksEnum, MAIN_MENU } from '../../routes';

import s from './Header.module.scss';
import { ReactComponent as PokemonLogo } from './img/logo.svg';

const Header = () => {
  const path = usePath();

  return (
    <header className={s.header}>
      <div className={s.headerWrapper}>
        <A className={s.headerLogo} href={LinksEnum.HOME}>
          <PokemonLogo />
        </A>

        <ul className={s.headerMenu}>
          {MAIN_MENU.map(({ title, slug }) => (
            <li key={title}>
              <A
                className={cn(s.headerMenuLink, {
                  [s.headerMenuLinkActive]: slug === path,
                })}
                href={slug}>
                {title}
              </A>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
