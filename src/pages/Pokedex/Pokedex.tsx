import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Layout from '../../components/Layout/Layout';

// import s from './Pokedex.module.scss';

const PokedexPage = () => {
  return (
    <div>
      <Header />
      <Layout>
        <p>POKEDEX PAGE</p>
      </Layout>
      <Footer />
    </div>
  );
};

export default PokedexPage;
