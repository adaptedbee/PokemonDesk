import React from 'react';
import cn from 'classnames';

import s from './Header.module.scss';
import PokemonLogo from './img/logo.svg';

interface MainMenuItem {
  id: number;
  name: string;
  slug: string;
}

const MAIN_MENU: MainMenuItem[] = [
  { id: 1, name: 'Home', slug: '#' },
  { id: 2, name: 'Pokédex', slug: '#' },
  { id: 3, name: 'Legendaries', slug: '#' },
  { id: 4, name: 'Documentation', slug: '#' },
];

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.headerWrapper}>
        <a className={s.headerLogo} href="/">
          <img src={PokemonLogo} width="157" height="63" alt="Pokemon logo" />
        </a>

        <ul className={s.headerMenu}>
          {MAIN_MENU.map(({ id, name, slug }) => (
            <li key={id}>
              <a className={cn(s.headerMenuLink)} href={slug}>
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
