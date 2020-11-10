import React from 'react';
import { Pokemon } from '../../pokemons';
import Heading from '../Heading/Heading';

import s from './PokemonCard.module.scss';

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ children, pokemon }) => {
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading size="h4" className={s.titleName}>
          Charmander
        </Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>52</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>43</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          <span className={s.label}>Fire</span>
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
          alt="Charmander"
        />
      </div>
    </div>
  );
};

export default PokemonCard;
