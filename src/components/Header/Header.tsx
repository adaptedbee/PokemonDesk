import React from 'react';
import cn from 'classnames';
import { A } from 'hookrouter';

import s from './Header.module.scss';
import { ReactComponent as PokemonLogo } from './img/logo.svg';

interface MainMenuItem {
  id: number;
  name: string;
  slug: string;
}

const MAIN_MENU: MainMenuItem[] = [
  { id: 1, name: 'Home', slug: '/' },
  { id: 2, name: 'Pokédex', slug: '/pokedex' },
  { id: 3, name: 'Legendaries', slug: '#' },
  { id: 4, name: 'Documentation', slug: '#' },
];

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.headerWrapper}>
        <A className={s.headerLogo} href="/">
          <PokemonLogo />
        </A>

        <ul className={s.headerMenu}>
          {MAIN_MENU.map(({ id, name, slug }) => (
            <li key={id}>
              <A className={cn(s.headerMenuLink)} href={slug}>
                {name}
              </A>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
