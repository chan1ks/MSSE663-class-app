import { ApplicationState } from './models/application-state.model';
import { AUTH_INITIAL_MOCK_STATE } from '../auth/store/auth-initial-mock-state';
import { USER_INITIAL_MOCK_STATE } from './user-initial-mock-state';
import { HERO_INITIAL_MOCK_STATE } from '../heroes/store/hero-initial-mock-state';
import { HEROES_INITIAL_MOCK_STATE } from '../heroes/store/heroes-initial-mock-state';

export const APP_INTIAL_MOCK_STATE: ApplicationState = {
  router: null,
  authState: AUTH_INITIAL_MOCK_STATE,
  userState: USER_INITIAL_MOCK_STATE,
  heroesState: HEROES_INITIAL_MOCK_STATE,
  selectedHero: HERO_INITIAL_MOCK_STATE,
};
