import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Layout from '../../components/Layout/Layout';
import PokemonCard from '../../components/PokemonCard/PokemonCard';

// import s from './Pokedex.module.scss';

interface PokedexPageProps {
  title?: string;
}

const PokedexPage: React.FC<PokedexPageProps> = ({ title }) => {
  return (
    <div>
      <Header />
      <Layout>
        <h1>{title}</h1>
        <PokemonCard />
      </Layout>
      <Footer />
    </div>
  );
};

export default PokedexPage;
