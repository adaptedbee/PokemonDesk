import React from 'react';
import HomePage from './pages/Home/Home';
import PokedexPage from './pages/Pokedex/Pokedex';

const routes = {
  '/': () => <HomePage />,
  '/pokedex': () => <PokedexPage />,
};

export default routes;
