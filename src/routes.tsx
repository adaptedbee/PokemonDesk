import React from 'react';
import HomePage from './pages/Home/Home';
import PokedexPage from './pages/Pokedex/Pokedex';

interface MainMenuItem {
  title: string;
  slug: string;
  component: () => JSX.Element;
}

export const MAIN_MENU: MainMenuItem[] = [
  {
    title: 'Home',
    slug: '/',
    component: () => <HomePage />,
  },
  {
    title: 'Pokédex',
    slug: '/pokedex',
    component: () => <PokedexPage title="Pokédex" />,
  },
  {
    title: 'Legendaries',
    slug: '/legendaries',
    component: () => <PokedexPage title="Legendaries" />,
  },
  {
    title: 'Documentation',
    slug: '/documentation',
    component: () => <PokedexPage title="Documentation" />,
  },
];

interface AccMenu {
  [n: string]: () => JSX.Element;
}

const routes = MAIN_MENU.reduce((acc: AccMenu, item: MainMenuItem) => {
  acc[item.slug] = item.component;
  return acc;
}, {});

export default routes;
