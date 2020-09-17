import { Rank } from '../models/hero.model';
import { HeroesState } from './heroes-state.model';

export const HEROES_INTIAL_MOCK_STATE: HeroesState = {
  heroes: [
    {
      _id: 'heroId',
      ranking: [Rank.S],
      name: 'Spiderman',
      specialty: 'Superhuman abilities and reflexes',
      rent: 1000,
      hired: false,
    },
  ],
};
