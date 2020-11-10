import React from 'react';
import { Pokemon } from '../../pokemons';
import Heading from '../Heading/Heading';

import s from './PokemonCard.module.scss';

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ children, pokemon }) => {
  const { name, img, types, stats } = pokemon;

  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading size="h4" className={s.titleName}>
          {name}
        </Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{stats.attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{stats.defense}</div>
            Defense
          </div>
        </div>
        {types.map((type) => (
          <div className={s.labelWrap} key={type}>
            <span className={s.label}>{type}</span>
          </div>
        ))}
      </div>
      <div className={s.pictureWrap}>
        <img src={img} alt={name} />
      </div>
    </div>
  );
};

export default PokemonCard;
