import { ApplicationState } from './models/application-state.model';
import { AUTH_INITIAL_STATE } from './auth-initial-state';
import { USER_INITIAL_STATE } from './user-initial-state';
import { HEROES_INITIAL_STATE } from '../hero-list/store/heroes-initial-state';
import { HERO_INITIAL_STATE } from '../hero-list/store/hero-initial-state';

export const APP_INTIAL_STATE: ApplicationState = {
  router: null,
  authState: AUTH_INITIAL_STATE,
  userState: USER_INITIAL_STATE,
  heroesState: HEROES_INITIAL_STATE,
  selectedHero: HERO_INITIAL_STATE,
};
