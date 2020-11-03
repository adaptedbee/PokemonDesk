import React from 'react';
import cn from 'classnames';

import s from './Header.module.scss';
import PokemonLogo from './img/logo.svg';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.header__wrapper}>
        <a className={s.header__logo} href="/">
          <img src={PokemonLogo} width="157" height="63" alt="Pokemon logo" />
        </a>

        <ul className={s.header__menu}>
          <li>
            <a className={cn(s.header__menuLink, s.header__menuLinkActive)} href="/">
              Home
            </a>
          </li>
          <li>
            <a className={s.header__menuLink} href="/">
              Pokédex
            </a>
          </li>
          <li>
            <a className={s.header__menuLink} href="/">
              Legendaries
            </a>
          </li>
          <li>
            <a className={s.header__menuLink} href="/">
              Documentation
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
