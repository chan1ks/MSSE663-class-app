import { HERO_INITIAL_MOCK_STATE } from './hero-initial-mock-state';
import { HeroesState } from './heroes-state.model';

export const HEROES_INITIAL_MOCK_STATE: HeroesState = {
  heroes: [HERO_INITIAL_MOCK_STATE.hero],
  loading: false,
  loaded: false,
};
