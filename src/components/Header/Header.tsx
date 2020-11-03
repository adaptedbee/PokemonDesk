import React from 'react';

// import s from './Header.module.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <a className="header__logo" href="/">
          <img src="" width="157" height="63" alt="" />
        </a>

        <ul className="header__menu">
          <li>
            <a className="header__menu-link header__menu-link--active" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="header__menu-link" href="/">
              Pokédex
            </a>
          </li>
          <li>
            <a className="header__menu-link" href="/">
              Legendaries
            </a>
          </li>
          <li>
            <a className="header__menu-link" href="/">
              Documentation
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
