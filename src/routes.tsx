import React, { PropsWithChildren } from 'react';
import HomePage from './pages/Home/Home';
import PokedexPage from './pages/Pokedex/Pokedex';
import PokemonPage, { PokemonPageProps } from './pages/Pokemon/Pokemon';

interface MainMenuItem {
  title: string;
  slug: LinksEnum;
  component: (props: PropsWithChildren<any>) => JSX.Element;
}

export enum LinksEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/documentation',
  POKEMON = '/pokedex/:id',
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

const SECOND_ROUTES: MainMenuItem[] = [
  {
    title: 'Pokemon',
    slug: LinksEnum.POKEMON,
    component: ({ id }: PokemonPageProps) => <PokemonPage id={id} />,
  },
];

interface AccMenu {
  [n: string]: (props: PropsWithChildren<any>) => JSX.Element;
}

const routes = [...MAIN_MENU, ...SECOND_ROUTES].reduce((acc: AccMenu, item: MainMenuItem) => {
  acc[item.slug] = item.component;
  return acc;
}, {});

export default routes;
