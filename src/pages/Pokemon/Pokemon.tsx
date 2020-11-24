import React from 'react';
import Footer from '../../components/Footer/Footer';
import Layout from '../../components/Layout/Layout';
import useData from '../../hook/useData';
import { Pokemon } from '../../pokemons';

export interface PokemonPageProps {
  id: string | number;
}

const PokemonPage: React.FC<PokemonPageProps> = ({ id }) => {
  const { data, isLoading, isError } = useData<Pokemon>('getPokemon', { id });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div>
      <Layout>
        <div>This is Pokemon named {data?.name}</div>
      </Layout>
      <Footer />
    </div>
  );
};

export default PokemonPage;
