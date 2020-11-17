import React from 'react';
import HomePage from './pages/Home/Home';
import PokedexPage from './pages/Pokedex/Pokedex';

interface MainMenuItem {
  title: string;
  slug: LinksEnum;
  component: () => JSX.Element;
}

export enum LinksEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/documentation',
}

export const MAIN_MENU: MainMenuItem[] = [
  {
    title: 'Home',
    slug: LinksEnum.HOME,
    component: () => <HomePage />,
  },
  {
    title: 'Pokédex',
    slug: LinksEnum.POKEDEX,
    component: () => <PokedexPage title="Pokédex" />,
  },
  {
    title: 'Legendaries',
    slug: LinksEnum.LEGENDARIES,
    component: () => <PokedexPage title="Legendaries" />,
  },
  {
    title: 'Documentation',
    slug: LinksEnum.DOCUMENTATION,
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
