import React from 'react';
import cn from 'classnames';

import s from './Header.module.scss';
import PokemonLogo from './img/logo.svg';

type MainMenuItem = { id: string; name: string; href: string };
const mainMenu: MainMenuItem[] = [
  { id: '1', name: 'Home', href: '/' },
  { id: '2', name: 'Pokédex', href: '/' },
  { id: '3', name: 'Legendaries', href: '/' },
  { id: '4', name: 'Documentation', href: '/' },
];

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.header__wrapper}>
        <a className={s.header__logo} href="/">
          <img src={PokemonLogo} width="157" height="63" alt="Pokemon logo" />
        </a>

        <ul className={s.header__menu}>
          {mainMenu.map((item) => (
            <li key={item.id}>
              <a className={cn(s.header__menuLink)} href={item.href}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
