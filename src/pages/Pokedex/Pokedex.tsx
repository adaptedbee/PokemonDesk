import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Layout from '../../components/Layout/Layout';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import useData from '../../hook/useData';

import s from './Pokedex.module.scss';

interface PokedexPageProps {
  title?: string;
}

const PokedexPage: React.FC<PokedexPageProps> = ({ title }) => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState({});

  const { data, isLoading, isError } = useData('getPokemons', query, [searchValue]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((s) => ({
      ...s,
      name: e.target.value,
    }));
  };

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div>
      <Layout>
        <h1>{title}</h1>
        <p>{!isLoading && data?.total} for you to choose your favorite.</p>
        <div>
          <input type="text" value={searchValue} onChange={handleSearchChange} />
        </div>
        <div className={s.cardsWrapper}>
          {!isLoading && data?.pokemons.map((item) => <PokemonCard key={item.id} pokemon={item} />)}
        </div>
      </Layout>
      <Footer />
    </div>
  );
};

export default PokedexPage;
