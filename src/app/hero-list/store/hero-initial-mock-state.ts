import { Rank } from '../models/hero.model';
import { HeroState } from './hero-state.model';

export const HERO_INITIAL_MOCK_STATE: HeroState = {
  hero: {
    _id: 'heroId',
    ranking: [Rank.S],
    name: 'Spiderman',
    specialty: 'Superhuman abilities and reflexes',
    rent: 1000,
    hired: false,
  },
  loading: false,
  loaded: false,
};
