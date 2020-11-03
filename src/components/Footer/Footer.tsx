import React from 'react';

import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footer__wrapper}>
        <p className={s.footer__info}>
          Made with
          <span role="img" aria-label="love">
            &nbsp;❤️
          </span>
        </p>
        <a className={s.footer__infoLink} href="/">
          Ours Team
        </a>
      </div>
    </footer>
  );
};

export default Footer;
