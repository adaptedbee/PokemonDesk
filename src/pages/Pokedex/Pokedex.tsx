import React from 'react';
import Footer from '../../components/Footer/Footer';
import Layout from '../../components/Layout/Layout';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import useData from '../../hook/useData';

import s from './Pokedex.module.scss';

interface PokedexPageProps {
  title?: string;
}

const PokedexPage: React.FC<PokedexPageProps> = ({ title }) => {
  const { data, isLoading, isError } = useData('getPokemons');

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div>
      <Layout>
        <h1>{title}</h1>
        <p>{data?.total} for you to choose your favorite.</p>
        <div className={s.cardsWrapper}>
          {data?.pokemons.map((item) => (
            <PokemonCard key={item.id} pokemon={item} />
          ))}
        </div>
      </Layout>
      <Footer />
    </div>
  );
};

export default PokedexPage;
