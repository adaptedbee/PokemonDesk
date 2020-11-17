import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Layout from '../../components/Layout/Layout';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import config from '../../config';
import { Pokemon } from '../../pokemons';

import s from './Pokedex.module.scss';

interface PokedexPageProps {
  title?: string;
}

interface PokemonsData {
  total: number;
  count: number;
  offset: number;
  limit: number;
  pokemons: Pokemon[];
}

interface UsePokemonsResult {
  data: PokemonsData | null;
  isLoading: boolean;
  isError: boolean;
}

const usePokemons = (): UsePokemonsResult => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getPokemons = async () => {
      setIsLoading(true);
      const url = `${config.client.server.protocol}://${config.client.server.host}${config.client.endpoint.getPokemons.uri.pathname}`;
      try {
        const response = await fetch(url);
        const result = await response.json();

        setData(result);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getPokemons();
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};

const PokedexPage: React.FC<PokedexPageProps> = ({ title }) => {
  const { data, isLoading, isError } = usePokemons();

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
