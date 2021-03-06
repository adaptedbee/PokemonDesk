import React from 'react';
import { navigate } from 'hookrouter';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import Heading from '../../components/Heading/Heading';
import Layout from '../../components/Layout/Layout';
import Parallax from '../../components/Parallax/Parallax';
import { LinksEnum } from '../../routes';

import s from './Home.module.scss';

const HomePage: React.FC = () => {
  const goToPokemons = () => {
    navigate(LinksEnum.POKEDEX);
  };

  return (
    <div className={s.homePage}>
      <Layout className={s.homePageWrapper}>
        <div className={s.homePageInfo}>
          <Heading size="h1">
            <b>Find</b> all your favorite <b>Pokemon</b>
          </Heading>
          <p>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
          <Button onClick={goToPokemons} color="yellow">
            See pokemons
          </Button>
        </div>
        <div className={s.homePageParallaxWrapper}>
          <Parallax />
        </div>
      </Layout>
      <Footer />
    </div>
  );
};

export default HomePage;
