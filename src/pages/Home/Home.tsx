import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

import s from './Home.module.scss';

const HomePage = () => {
  return (
    <div className={s.homePage}>
      <Header />
      <div>content</div>
      <Footer />
    </div>
  );
};

export default HomePage;
