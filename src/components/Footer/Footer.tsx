import React from 'react';

// import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <p className="footer__info">
          Made with{' '}
          <span role="img" aria-label="love">
            ❤️
          </span>
        </p>
        <a className="footer__company" href="/">
          Ours Team
        </a>
      </div>
    </footer>
  );
};

export default Footer;
