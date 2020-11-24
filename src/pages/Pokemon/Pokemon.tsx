import React from 'react';
import Footer from '../../components/Footer/Footer';
import Layout from '../../components/Layout/Layout';

export interface PokemonPageProps {
  id: string | number;
}

const PokemonPage: React.FC<PokemonPageProps> = ({ id }) => {
  return (
    <div>
      <Layout>
        <div>This is Pokemon id {id}</div>
      </Layout>
      <Footer />
    </div>
  );
};

export default PokemonPage;
