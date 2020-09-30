import { Hero, Rank } from '../models/hero.model';
import { HeroState } from './hero-state.model';

export const MOCK_HERO: Hero = {
  _id: 'heroId',
  ranking: [Rank.S],
  name: 'Spiderman',
  specialty: 'Superhuman abilities and reflexes',
  rent: 1000,
  hired: false,
};

export const HERO_INITIAL_MOCK_STATE: HeroState = {
  hero: MOCK_HERO,
  loading: false,
  loaded: false,
};

// More heroes to play with
// export const HEROES: Hero[] = [
//   {
//     id: 1,
//     name: 'Captain Marvel',
//     specialty: 'Energy Manipulation',
//     ranking: Rank.S,
//     rent: 2000,
//   },
//   {
//     id: 2,
//     name: 'Spiderman',
//     specialty: 'Superhuman abilities and reflexes',
//     ranking: Rank.S,
//     rent: 1000,
//   },
//   {
//     id: 3,
//     name: 'Black Panther',
//     specialty: 'Espeonage',
//     ranking: Rank.A,
//     rent: 300,
//   },
//   {
//     id: 4,
//     name: 'Hawkeye',
//     specialty: 'Specialty Sniper',
//     ranking: Rank.B,
//     rent: 100,
//   },
// ];
