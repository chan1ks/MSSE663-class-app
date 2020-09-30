import { MOCK_HERO } from './hero-initial-mock-state';
import { HeroesState } from './heroes-state.model';

export const HEROES_INITIAL_MOCK_STATE: HeroesState = {
  heroes: [MOCK_HERO],
  loading: false,
  loaded: false,
};
