import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Layout from '../../components/Layout/Layout';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import useData, { IResponse } from '../../hook/useData';
import useDebounce from '../../hook/useDebounce';
import { Pokemon } from '../../pokemons';

import s from './Pokedex.module.scss';

interface PokedexPageProps {
  title?: string;
}

interface IQuery {
  name?: string;
}

const PokedexPage: React.FC<PokedexPageProps> = ({ title }) => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<IQuery>({});
  const debouncedValue = useDebounce(searchValue, 500);

  const { data, isLoading, isError } = useData<IResponse>('getPokemons', query, [debouncedValue]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((state: IQuery) => ({
      ...state,
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
          {!isLoading && data?.pokemons.map((item: Pokemon) => <PokemonCard key={item.id} pokemon={item} />)}
        </div>
      </Layout>
      <Footer />
    </div>
  );
};

export default PokedexPage;
