import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Layout from '../../components/Layout/Layout';

// import s from './Pokedex.module.scss';

const NotFoundPage = () => {
  return (
    <div>
      <Header />
      <Layout>
        <h1>PAGE NOT FOUND</h1>
      </Layout>
      <Footer />
    </div>
  );
};

export default NotFoundPage;
