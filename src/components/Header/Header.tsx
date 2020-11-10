import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';

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
        <Link className={s.headerLogo} to="/">
          <PokemonLogo />
        </Link>

        <ul className={s.headerMenu}>
          {MAIN_MENU.map(({ id, name, slug }) => (
            <li key={id}>
              <Link className={cn(s.headerMenuLink)} to={slug}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
